
"""
Translation Comparison Script
Compares messages.xlf with messages.ar.xlf and adds missing entries with blank targets.
Enhanced version with better analysis and reporting.
"""

import xml.etree.ElementTree as ET
import os
import argparse
from typing import Dict, Set, Tuple

def parse_xlf_file(file_path: str) -> Dict[str, str]:
    """
    Parse an XLF file and return a dictionary of id -> source text mappings.
    """
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()
        
        # Handle namespace - XLF files use default namespace
        namespace = {'': 'urn:oasis:names:tc:xliff:document:1.2'}
        
        trans_units = {}
        
        # Find all trans-unit elements with namespace
        for trans_unit in root.findall('.//{urn:oasis:names:tc:xliff:document:1.2}trans-unit'):
            unit_id = trans_unit.get('id')
            source_elem = trans_unit.find('{urn:oasis:names:tc:xliff:document:1.2}source')
            
            if unit_id and source_elem is not None:
                source_text = source_elem.text or ""
                # Handle text content that might have child elements
                if source_text is None:
                    source_text = ''.join(source_elem.itertext())
                trans_units[unit_id] = source_text
        
        return trans_units
    
    except ET.ParseError as e:
        print(f"Error parsing {file_path}: {e}")
        return {}
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return {}

def get_existing_arabic_data(file_path: str) -> Tuple[Set[str], Set[str]]:
    """
    Get all existing translation unit IDs from the Arabic file and identify empty targets.
    Returns: (existing_ids, empty_target_ids)
    """
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()
        
        existing_ids = set()
        empty_target_ids = set()
        
        # Find all trans-unit elements with namespace
        for trans_unit in root.findall('.//{urn:oasis:names:tc:xliff:document:1.2}trans-unit'):
            unit_id = trans_unit.get('id')
            if unit_id:
                existing_ids.add(unit_id)
                
                # Check if target is empty
                target_elem = trans_unit.find('{urn:oasis:names:tc:xliff:document:1.2}target')
                if target_elem is not None:
                    target_text = target_elem.text or ""
                    if target_text.strip() == "":
                        empty_target_ids.add(unit_id)
        
        return existing_ids, empty_target_ids
    
    except (ET.ParseError, FileNotFoundError):
        return set(), set()

def escape_xml_text(text: str) -> str:
    """
    Properly escape text for XML content.
    """
    if not text:
        return ""
    
    return (text.replace('&', '&amp;')
               .replace('<', '&lt;')
               .replace('>', '&gt;')
               .replace('"', '&quot;')
               .replace("'", '&apos;'))

def create_trans_unit_xml(unit_id: str, source_text: str) -> str:
    """
    Create XML string for a new trans-unit with blank target.
    """
    escaped_source = escape_xml_text(source_text)
    
    return f'''      <trans-unit id="{unit_id}" datatype="html">
        <source>{escaped_source}</source>
        <target></target>
      </trans-unit>'''

def analyze_and_add_missing_translations(english_file: str, arabic_file: str, dry_run: bool = False):
    """
    Compare English and Arabic files and add missing translations with blank targets.
    If dry_run is True, only analyze and report without making changes.
    """
    print("Analyzing translation files...")
    print("-" * 50)
    
    # Parse English file to get all translation units
    english_translations = parse_xlf_file(english_file)
    print(f"✓ Found {len(english_translations)} translation units in English file")
    
    if not english_translations:
        print("❌ No translations found in English file. Cannot proceed.")
        return
    
    # Get existing Arabic translation IDs and empty targets
    existing_arabic_ids, empty_target_ids = get_existing_arabic_data(arabic_file)
    print(f"✓ Found {len(existing_arabic_ids)} existing translation units in Arabic file")
    print(f"⚠️  Found {len(empty_target_ids)} entries with empty targets in Arabic file")
    
    # Find missing translations
    missing_ids = set(english_translations.keys()) - existing_arabic_ids
    print(f"🔍 Found {len(missing_ids)} missing translations")
    
    # Report summary
    print("\n" + "=" * 60)
    print("ANALYSIS SUMMARY")
    print("=" * 60)
    print(f"Total English entries:      {len(english_translations)}")
    print(f"Total Arabic entries:       {len(existing_arabic_ids)}")
    print(f"Missing from Arabic:        {len(missing_ids)}")
    print(f"Empty targets in Arabic:    {len(empty_target_ids)}")
    print(f"Translation coverage:       {((len(existing_arabic_ids) - len(empty_target_ids)) / len(english_translations) * 100):.1f}%")
    
    if not missing_ids:
        print("\n✅ No missing translations found. Arabic file structure is up to date!")
        if empty_target_ids:
            print(f"📝 However, {len(empty_target_ids)} entries still need translation.")
            if not dry_run:
                print("\nEmpty target IDs (first 10):")
                for i, target_id in enumerate(sorted(empty_target_ids)):
                    if i >= 10:
                        print(f"   ... and {len(empty_target_ids) - 10} more")
                        break
                    print(f"   - {target_id}")
        return
    
    if dry_run:
        print(f"\n🔍 DRY RUN: Would add {len(missing_ids)} missing entries")
        print("Missing IDs (first 10):")
        for i, missing_id in enumerate(sorted(missing_ids)):
            if i >= 10:
                print(f"   ... and {len(missing_ids) - 10} more")
                break
            print(f"   - {missing_id}")
        return
    
    print(f"\n📝 Adding {len(missing_ids)} missing translations...")
    
    # Read the Arabic file content
    try:
        with open(arabic_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Arabic file not found: {arabic_file}")
        return
    
    # Create new translation units
    new_translations = []
    for unit_id in sorted(missing_ids):  # Sort for consistent output
        source_text = english_translations[unit_id]
        new_trans_unit = create_trans_unit_xml(unit_id, source_text)
        new_translations.append(new_trans_unit)
        print(f"   ➕ Adding: {unit_id}")
    
    # Find the position to insert new translations (before </body>)
    insert_position = content.rfind('    </body>')
    if insert_position == -1:
        print("❌ Could not find </body> tag in Arabic file")
        return
    
    # Insert new translations
    new_content = (
        content[:insert_position] + 
        '\n'.join(new_translations) + '\n' +
        content[insert_position:]
    )
    
    # Write back to Arabic file
    try:
        with open(arabic_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"\n✅ Successfully added {len(missing_ids)} missing translations to {arabic_file}")
        print(f"📊 New translation coverage: {((len(existing_arabic_ids) + len(missing_ids) - len(empty_target_ids)) / len(english_translations) * 100):.1f}%")
    except Exception as e:
        print(f"❌ Error writing to Arabic file: {e}")

def main():
    """
    Main function to run the translation comparison.
    """
    parser = argparse.ArgumentParser(description='Compare and sync XLF translation files')
    parser.add_argument('--dry-run', action='store_true', 
                       help='Analyze files without making changes')
    parser.add_argument('--english-file', 
                       help='Path to English XLF file (default: src/locale/messages.xlf)')
    parser.add_argument('--arabic-file', 
                       help='Path to Arabic XLF file (default: src/locale/messages.ar.xlf)')
    
    args = parser.parse_args()
    
    # File paths
    base_dir = os.path.dirname(os.path.abspath(__file__))
    english_file = args.english_file or os.path.join(base_dir, 'src', 'locale', 'messages.xlf')
    arabic_file = args.arabic_file or os.path.join(base_dir, 'src', 'locale', 'messages.ar.xlf')
    
    print("Translation Analysis & Sync Tool")
    print("=" * 40)
    print(f"English file: {english_file}")
    print(f"Arabic file:  {arabic_file}")
    if args.dry_run:
        print("Mode:         DRY RUN (no changes will be made)")
    print()
    
    # Check if files exist
    if not os.path.exists(english_file):
        print(f"❌ Error: English file not found at {english_file}")
        return
    
    if not os.path.exists(arabic_file):
        print(f"❌ Error: Arabic file not found at {arabic_file}")
        return
    
    # Perform comparison and add missing translations
    analyze_and_add_missing_translations(english_file, arabic_file, args.dry_run)
    print("\n🎉 Analysis complete!")

if __name__ == "__main__":
    main()
