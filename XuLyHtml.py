import os
from bs4 import BeautifulSoup

def remove_genspark_from_html_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "lxml")

    # Xoá các đoạn liên quan đến Genspark
    for badge_id in ("html_badge_script1", "html_badge_script2"):
        tag = soup.find("script", id=badge_id)
        if tag:
            tag.decompose()

    for s in soup.find_all("script", src=True):
        if "notice_dialog.js" in s["src"]:
            s.decompose()
    for tag in soup.select("footer"):
        tag.decompose()
    for tag in soup.select("button.genspark-badge-button, div.genspark-modal, [class^='genspark-']"):
        tag.decompose()

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup))

def process_html_folder(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".html"):
            full_path = os.path.join(folder_path, filename)
            print(f"🧹 Cleaning file: {full_path}")
            remove_genspark_from_html_file(full_path)
    print("✅ Done cleaning all HTML files.")

if __name__ == "__main__":
    folder_path = r"./raw-html"  # ⚠️ Thay đường dẫn tới thư mục chứa HTML tại đây
    process_html_folder(folder_path)
