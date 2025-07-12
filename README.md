# Employee Directory — Frontend UI Assignment

This is a responsive and interactive Employee Directory web app built using **HTML, CSS, JavaScript, and Freemarker templates**.

---

## Project Structure

```
employee-directory/
├── templates/ ← Freemarker HTML pages
├── static/ ← CSS and JS scripts
├── data/ ← JSON mock employee data
├── lib/ ← Freemarker JAR
├── Main.java ← Java file to render templates
```

---

## Features

1. Employee listing grid using Freemarker  
2. Add/Edit form with validation  
3. Search, Filter, and Sort UI  
4. Pagination support  
5. Responsive mobile-friendly layout  
6. LocalStorage for data management (no backend)

---

## Technologies Used

- HTML, CSS, JavaScript (Vanilla)
- Freemarker (template engine)
- Java (just to run Freemarker)
- LocalStorage for saving employee data

---

## How to Run

### Prerequisites

- Java JDK installed (`java -version`)
- VS Code or any code editor

---

### Steps

1. Download Freemarker JAR:
   [Freemarker JAR Download](https://freemarker.apache.org/freemarkerdownload.html)
   - Save it in `/lib` folder

2. Compile and run the template:

```bash
javac -cp "lib/freemarker-2.3.xx.jar" Main.java
java -cp ".:lib/freemarker-2.3.xx.jar" Main > output.html
```

3. Open output.html in browser to view the rendered app.

4. All data will be saved to localStorage when adding/editing employees.

## Screenshots

1. Dashboard view---- (https://res.cloudinary.com/dgwvwp4qo/image/upload/v1752312083/Screenshot_2025-07-12_145054_iwi6kx.png)

2. Form view----- (https://res.cloudinary.com/dgwvwp4qo/image/upload/v1752312319/Screenshot_2025-07-12_145502_qomoun.png)

3. Search----- (https://res.cloudinary.com/dgwvwp4qo/image/upload/v1752312381/Screenshot_2025-07-12_145608_h5zwkb.png)


## Challenges Faced

1. Setting up Freemarker without full backend

2. Making pagination + filtering work purely on the frontend
