import os
import random
import string

def generate_random_string(length):
    return ''.join(random.choices(string.ascii_lowercase, k=length))

def rename_images(folder_path):
    if not os.path.isdir(folder_path):
        print(f"Error: {folder_path} is not a valid directory.")
        return
    
    # List all files in the directory
    files = os.listdir(folder_path)
    
    for filename in files:
        # Check if the file is an image
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Extract file extension
            file_name, file_ext = os.path.splitext(filename)
            
            # Generate random alphabets
            random_chars1 = generate_random_string(2)
            random_chars2 = generate_random_string(2)
            random_chars3 = generate_random_string(3)
            new_filename = f"IMG{random_chars1}9g{random_chars2}14i{random_chars3}{file_ext}"
            
            # Rename the file
            old_path = os.path.join(folder_path, filename)
            new_path = os.path.join(folder_path, new_filename)
            os.rename(old_path, new_path)
            print(f"Renamed {filename} to {new_filename}")

if __name__ == "__main__":
    folder_path = os.path.dirname(os.path.realpath(__file__))
    rename_images(folder_path)
