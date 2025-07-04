# ...existing code...

# Ensure the parent directory exists before writing the file
dashboard_file.parent.mkdir(parents=True, exist_ok=True)
dashboard_file.write_text(dashboard_code)

# Write supporting files
(base_path / "README.md").write_text(
    "# Solomon Reasoning Engine\n\nA visual AI dashboard inspired by Solomon's wisdom."
)
(base_path / "package.json").write_text(
    '{\n  "name": "solomon-reasoning-engine",\n  "version": "1.0.0",\n  "dependencies": {}\n}'
)

# Initialize git repository and commit files
subprocess.run(["git", "init"], cwd=base_path)
subprocess.run(["git", "add", "."], cwd=base_path)
subprocess.run(["git", "commit", "-m", "Initial commit"], cwd=base_path)

# Zip the project
with zipfile.ZipFile(zip_path, "w") as zipf:
    for file_path in base_path.rglob("*"):
        zipf.write(file_path, file_path.relative_to(base_path.parent))

print(zip_path.name)
# ...existing code...
