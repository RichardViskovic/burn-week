# Student Timetable Viewer

A lightweight, client-side web application for visualizing and printing student timetables from CSV data.

## Project Overview
This project provides a professional interface for school staff or students to convert raw timetable data (in CSV format) into a readable, color-coded, and printable weekly schedule.

### Core Technologies
- **Frontend:** Vanilla HTML5, CSS3, and JavaScript (ES6+).
- **Persistence:** `localStorage` is used to cache the uploaded CSV data for persistence across sessions.
- **Rendering:** Batch rendering logic in `app.js` ensures the UI remains responsive even with large datasets (hundreds of students).

### Key Features
- **CSV Import:** Custom robust CSV parser that handles quoted fields and multi-line data.
- **Search/Filter:** Real-time student search with debounced input.
- **Print Optimization:** Dedicated print styles for landscape A4/Letter output, including page breaks between students.
- **Data Mapping:** Internal maps for teacher initials to full names and subject codes to human-readable titles.
- **Color Coding:** Automatic color assignment for different classes to improve visual navigation.

## Building and Running
As a vanilla web project, there is no build or installation step.

- **To Run:** Open `index.html` in any modern web browser.
- **Dependencies:** None. All logic is contained within `app.js` and `styles.css`.

## Development Conventions
- **Modular CSS:** Uses CSS variables (`:root`) for easy theme adjustments.
- **Performance:** Employs `setTimeout`-based batch rendering (`renderBatch`) to prevent UI freezing during large DOM injections.
- **Print Styles:** Uses `@media print` with `page-break-after: always` and `size: landscape` to ensure professional output.
- **Data Integrity:** Includes a "Clear Data" feature to safely wipe `localStorage` and reset the application state.

## Project Structure
- `index.html`: The main entry point and UI structure.
- `app.js`: Contains CSV parsing logic, data mapping, and dynamic DOM generation.
- `styles.css`: Handles layout, component styling, and print-specific overrides.
- `TimeTableSummaryStudents_*.csv`: Example/Reference data file (expected input format).

## Expected CSV Format
The application expects a CSV with the following structure:
- **Column 1:** Student Name (e.g., `"Johnston, Grace"`)
- **Column 2:** ID Number
- **Column 3:** Form Class
- **Column 4:** Year Level
- **Columns 5-49 (Week 1):** 45 columns (5 days × 9 slots per day).
- **Columns 50-94 (Week 2):** 45 columns (5 days × 9 slots per day).

### Slot Mapping (per day)
The 9 slots in the CSV headers (e.g., `M F`, `M 1`, `M 2`, `M I`, `M 3`, `M 4`, `M L`, `M 5`, `M AS`) map as follows:
1. `F`: Form
2. `1`: Period 1
3. `2`: Period 2
4. `I`: Interval
5. `3`: Period 3
6. `4`: Period 4
7. `L`: Lunch
8. `5`: Period 5
9. `AS`: After School (Displayed as a compressed row in the UI)

### Cell Data Format
Cells should follow the format: `TeacherInitials-SubjectCode-Room` (e.g., `RNA-KCP-L3`).
- **Teacher:** Mapped via `teacherMap` in `app.js`.
- **Subject:** Mapped via `subjectMap` in `app.js`.
- **Room:** Displayed as-is.
