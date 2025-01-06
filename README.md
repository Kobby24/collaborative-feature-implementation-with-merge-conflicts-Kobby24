[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vVlP5Km7)
# Collaborative Feature Implementation

Welcome to the **Collaborative Feature Implementation** assignment! This challenge is designed to test your understanding of forking, branching, merging, and resolving merge conflicts.

---

## Objectives

By completing this assignment, you will:

1. Learn how to fork and clone a repository.
2. Understand the importance of branching for feature development.
3. Practice making meaningful contributions to a shared project.
4. Resolve merge conflicts and maintain a clean git history.

---

## Instructions

### 1. Fork and Clone
- Fork this repository to your GitHub account.
- Clone your forked repository to your local machine using the command:
  ```bash
  git clone <your-forked-repo-url>
  ```

### 2. Create a New Branch
- Create a new branch for your feature with a meaningful name:
  ```bash
  git checkout -b add-contact-form
  ```

### 3. Implement a Feature
- Add a new HTML file named `contact.html`.
- Inside `contact.html`, create a simple contact form with the following fields:
  - Name
  - Email
  - Message
  - Submit button
- Style the form using CSS. You can either create a new `contact.css` file or update an existing CSS file.
- Optionally, add a JavaScript file to validate the form fields.

### 4. Commit Changes
- Add your changes and commit them with a meaningful message:
  ```bash
  git add .
  git commit -m "Added a contact form with email validation"
  ```

### 5. Push and Create a Pull Request
- Push your branch to your forked repository:
  ```bash
  git push origin add-contact-form
  ```
- Go to the original repository and open a pull request to merge your feature into the main branch.

### 6. Resolve Merge Conflicts (Simulated)
- The main repository will be updated with changes to simulate a merge conflict.
- Fetch and merge the upstream changes:
  ```bash
  git remote add upstream <original-repo-url>
  git fetch upstream
  git merge upstream/main
  ```
- Resolve any merge conflicts locally and commit the resolved changes.
- Update your pull request with the resolved changes:
  ```bash
  git push origin add-contact-form
  ```

---

## Submission

Once your pull request is created, it will be reviewed. Make sure your implementation meets the following requirements:

1. **File Exists:** `contact.html` is present.
2. **Form Content:** The form includes the specified fields.
3. **Styling:** The form is styled appropriately.
4. **Conflict Resolution:** Any merge conflicts are resolved correctly.
5. **Commit Messages:** Commit messages are clear and descriptive.

---

## Evaluation Criteria

Your work will be evaluated based on:

1. **Correctness:** Does the feature work as expected?
2. **Conflict Resolution:** Were conflicts resolved properly?
3. **Code Quality:** Is your code clean and well-organized?
4. **Commit History:** Are commit messages clear and descriptive?

---

## Additional Resources

If you need help, check out these resources:

- [GitHub Docs: Forking a Repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [Resolving Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)

Good luck, and happy coding! 🎉
