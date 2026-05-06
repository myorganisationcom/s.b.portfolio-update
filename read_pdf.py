import fitz  # PyMuPDF

doc = fitz.open("sarvanu.com Changes.pdf")
text = ""
pages = min(40, len(doc))
for i in range(pages):
    page = doc.load_page(i)
    text += f"\n--- Page {i+1} ---\n"
    text += page.get_text() + "\n"

with open("pdf_content.txt", "w", encoding="utf-8") as f:
    f.write(text)
