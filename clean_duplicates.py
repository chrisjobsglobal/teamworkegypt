#!/usr/bin/env python3
"""
Remove duplicate translation entries and translate remaining empty targets.
"""

import xml.etree.ElementTree as ET
from collections import defaultdict
import re

def analyze_duplicates(file_path: str):
    """
    Analyze the XLF file for duplicate IDs and empty targets.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all trans-unit entries
        pattern = r'<trans-unit id="([^"]+)"[^>]*>.*?<source>(.*?)</source>.*?<target>(.*?)</target>.*?</trans-unit>'
        matches = re.findall(pattern, content, re.DOTALL)
        
        # Group by ID
        id_groups = defaultdict(list)
        for match in matches:
            unit_id, source, target = match
            id_groups[unit_id].append({
                'source': source.strip(),
                'target': target.strip(),
                'full_match': match
            })
        
        duplicates = {}
        for unit_id, entries in id_groups.items():
            if len(entries) > 1:
                duplicates[unit_id] = entries
        
        print(f"Found {len(duplicates)} duplicate IDs:")
        for unit_id, entries in duplicates.items():
            print(f"\nID: {unit_id}")
            for i, entry in enumerate(entries):
                target_status = "EMPTY" if not entry['target'] else "HAS_TRANSLATION"
                print(f"  {i+1}. Target: {target_status}")
                if entry['target']:
                    print(f"     Translation: {entry['target'][:50]}...")
        
        return duplicates, content
        
    except Exception as e:
        print(f"Error analyzing file: {e}")
        return {}, ""

def remove_duplicates_and_clean(file_path: str):
    """
    Remove duplicate entries keeping the ones with translations.
    """
    duplicates, content = analyze_duplicates(file_path)
    
    if not duplicates:
        print("No duplicates found!")
        return
    
    # For each duplicate ID, keep only the entry with translation
    for unit_id, entries in duplicates.items():
        # Find entries with translations vs empty targets
        with_translation = [e for e in entries if e['target']]
        without_translation = [e for e in entries if not e['target']]
        
        if with_translation and without_translation:
            # Remove the empty ones
            for empty_entry in without_translation:
                # Create pattern to match the entire trans-unit block
                source_escaped = re.escape(empty_entry['source'])
                pattern = rf'<trans-unit id="{re.escape(unit_id)}"[^>]*>.*?<source>{source_escaped}</source>.*?<target></target>.*?</trans-unit>'
                content = re.sub(pattern, '', content, flags=re.DOTALL)
                print(f"Removed empty duplicate for ID: {unit_id}")
    
    # Write cleaned content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Duplicates cleaned!")

def find_empty_targets(file_path: str):
    """
    Find all entries with empty targets that need translation.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find entries with empty targets
        pattern = r'<trans-unit id="([^"]+)"[^>]*>.*?<source>(.*?)</source>.*?<target></target>.*?</trans-unit>'
        matches = re.findall(pattern, content, re.DOTALL)
        
        empty_entries = []
        for match in matches:
            unit_id, source = match
            empty_entries.append({
                'id': unit_id,
                'source': source.strip()
            })
        
        print(f"\nFound {len(empty_entries)} entries with empty targets:")
        for entry in empty_entries[:10]:  # Show first 10
            print(f"  {entry['id']}: {entry['source'][:60]}...")
        
        if len(empty_entries) > 10:
            print(f"  ... and {len(empty_entries) - 10} more")
        
        return empty_entries
        
    except Exception as e:
        print(f"Error finding empty targets: {e}")
        return []

def main():
    file_path = "src/locale/messages.ar.xlf"
    
    print("=== Analyzing Arabic Translation File ===")
    print(f"File: {file_path}\n")
    
    # Step 1: Remove duplicates
    print("Step 1: Removing duplicates...")
    remove_duplicates_and_clean(file_path)
    
    # Step 2: Find remaining empty targets
    print("\nStep 2: Finding remaining empty targets...")
    empty_entries = find_empty_targets(file_path)
    
    print(f"\nSummary:")
    print(f"- Duplicates removed")
    print(f"- {len(empty_entries)} entries still need translation")

if __name__ == "__main__":
    main()
