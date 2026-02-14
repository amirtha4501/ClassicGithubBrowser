# GithubBrowser

An Angular 16 (Classic Syntax) application to search and explore repositories of GitHub users and organizations using the public GitHub REST API.

This project demonstrates Angular Core Concepts using traditional structural directives and decorators (pre-modern control flow syntax).

> Generated with Angular CLI 16.2.5

---

# 📌 Purpose of This Project

This project is built as a **Hands-On Training Demo** for:

✔ Angular Core Fundamentals  
✔ Component Architecture  
✔ Template Syntax  
✔ Directives & Pipes  
✔ Component Communication  
✔ ViewChild usage (Decorator-based)  
✔ Classic Structural Directives  

⚠️ This project intentionally avoids modern Angular control flow (`@for`, `@if`, signals, etc.) because those are demonstrated in a separate latest Angular project.

---

# 🚀 Tech Stack

- Angular 16.2.5
- TypeScript
- RxJS
- GitHub REST API
- Angular FormsModule
- Angular HttpClient

---

# 📁 Project Structure

```
github-browser/
│
├── src/
│ ├── app/
│ │
│ │ ├── models/
│ │ │ └── repository.model.ts
│ │ │
│ │ ├── services/
│ │ │ └── github.service.ts
│ │ │
│ │ ├── directives/
│ │ │ └── highlight.directive.ts
│ │ │
│ │ ├── pipes/
│ │ │ └── truncate.pipe.ts
│ │ │
│ │ ├── components/
│ │ │ ├── search/
│ │ │ │ ├── search.component.ts
│ │ │ │ ├── search.component.html
│ │ │ │ ├── search.component.css
│ │ │ │ └── search.component.spec.ts
│ │ │ │
│ │ │ ├── repo-list/
│ │ │ │ ├── repo-list.component.ts
│ │ │ │ ├── repo-list.component.html
│ │ │ │ ├── repo-list.component.css
│ │ │ │ └── repo-list.component.spec.ts
│ │ │ │
│ │ │ └── repo-card/
│ │ │ ├── repo-card.component.ts
│ │ │ ├── repo-card.component.html
│ │ │ ├── repo-card.component.css
│ │ │ └── repo-card.component.spec.ts
│ │ │
│ │ ├── app.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.css
│ │ └── app.module.ts
│ │
│ ├── assets/
│ ├── styles.css
│ ├── index.html
│ └── main.ts
│
└── angular.json
```

---

# 🧠 Angular Concepts Demonstrated

| Requirement | Where Implemented |
|------------|------------------|
| `[(ngModel)]` | Search input field |
| `*ngFor` | Repository listing |
| `*ngIf` | Starred / Forked indicators |
| `[ngSwitch]` | Language display logic |
| `[ngClass]` | Popular repository styling |
| `[ngStyle]` | Conditional inline styling |
| Built-in Pipes | `date` pipe |
| Custom Pipe | `truncate` pipe |
| `@Input()` | RepoCardComponent |
| `@Output()` | SearchComponent |
| `@ViewChild()` (Decorator) | AppComponent controlling child |
| Class Property Binding | `popularityThreshold` |
| Custom Directive | `appHighlight` |
| HttpClient | GitHub API integration |
| Async Pipe | Repository observable handling |

---

# 🏗 Training Coverage Mapping (Slide Alignment)

This hands-on project aligns with the training topics:

### 1️⃣ Angular Environment & Setup
- Angular CLI usage
- Project scaffolding
- `angular.json` structure
- Development vs Production builds
- `ng serve` and `ng build`

### 2️⃣ Components & Architecture
- Component metadata
- Parent → Child communication (`@Input`)
- Child → Parent communication (`@Output`)
- Lifecycle awareness
- `@ViewChild()` usage
- Template reference usage
- Separation of concerns (Service layer)

### 3️⃣ Template Techniques
- Interpolation
- Property binding
- Event binding
- Two-way binding (`ngModel`)
- Structural directives (`*ngIf`, `*ngFor`)
- `ngSwitch`

### 4️⃣ Directives & Pipes
- Attribute directives (`ngClass`, `ngStyle`)
- Custom directive
- Built-in pipes (`date`)
- Custom pure pipe (`truncate`)
- Async pipe for Observables

---

# 🧩 Component Breakdown

## 🔎 Search Component

Demonstrates:

- `[(ngModel)]`
- Event binding
- `@Output()` decorator
- Two-way data binding

---

## 📂 Repo List Component

Demonstrates:

- `*ngFor`
- `*ngIf`
- Async pipe
- Observable handling
- Parent-child interaction

---

## 📦 Repo Card Component

Demonstrates:

- `@Input()`
- `[ngClass]`
- `[ngStyle]`
- `ngSwitch`
- `*ngIf`
- Built-in pipe (`date`)
- Custom pipe (`truncate`)
- Class property binding

---

## 🎯 Custom Directive

`appHighlight` demonstrates:

- Attribute directive creation
- `@Input()` inside directive
- DOM manipulation via `ElementRef`

---

## 🔁 Service Layer

`GithubService` demonstrates:

- HttpClient usage
- REST API consumption
- Observable return type
- Clean architecture separation

---

# 🛠 CLI Commands Used

```bash
ng new github-browser
ng generate component components/search
ng generate component components/repo-list
ng generate component components/repo-card
ng generate service services/github
ng generate pipe pipes/truncate
ng generate directive directives/highlight
```

---

# 🧪 Development Server
```
ng serve
```

Navigate to:
```
http://localhost:4200/
```

# 🏗 Build for Production
```
ng build --configuration production
```

Build artifacts are generated in:
```
dist/
```

# 🧪 Unit Testing

This project uses **Jasmine** as the testing framework and **Karma** as the test runner. The test suites cover services, components, pipes, and directives.

### Run Tests (Interactive)
To run the tests in a browser and watch for changes:
```bash
ng test
```

### Run Tests (Single Run / CI)
To run the tests once in a headless chrome browser (useful for validation):
```bash
ng test --no-watch --browsers=ChromeHeadless
```

### What's Covered?
- **Services**: `GithubService` tested with `HttpClientTestingModule` for API interaction logic.
- **Components**: 
  - `SearchComponent`: Logic for event emission on user input.
  - `RepoListComponent`: Interaction with the data service using mocks.
  - `RepoCardComponent`: UI logic like `ngClass` for popular repos and `ngStyle` for fork highlights.
- **Pipes**: `TruncatePipe` logic for string manipulation.
- **Directives**: `HighlightDirective` for DOM styling verification.

### Validation
A successful test run should report:
```text
TOTAL: 21 SUCCESS
```
