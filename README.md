# GFF - GitHub Folder Fetcher

**GFF** is a simple CLI tool that allows you to download specific folders from GitHub repositories with ease. Using this tool, you can fetch only the necessary folder from a GitHub repository without having to clone the entire repository.

## Features

- **Download specific folders** from any public GitHub repository.
- **Simple CLI interface** that can be used directly via `npx`.
- **Lightweight**: Only fetches the folder you need, making it fast and efficient.
- **Supports GitHub Enterprise**: Fetch folders from GitHub Enterprise repositories.

## Installation

### Using `npx`

You can use the tool directly with `npx` without installing it globally:

```bash
npx gff <github-folder-url>
```

Where `<github-folder-url>` is the URL of the GitHub folder you want to download.

### Installing Locally

Alternatively, you can install `gff` locally as a dependency in your project:

```bash
npm install gff --save-dev
```

Then, use it by running:

```bash
npx gff <github-folder-url>
```

## Usage

Once installed, you can fetch any folder from a GitHub repository by running the following command:

```bash
npx gff <github-folder-url>
```

### Example:

To download the `src/templates/TypeScript/Express/MongoDB/JWT` folder from the `dollfin-templates` repository, run:

```bash
npx gff https://github.com/shaantanu9/dollfin-templates/tree/main/src/templates/TypeScript/Express/MongoDB/JWT
```

This will download the folder to your current directory, named after the repository folder.

## Development

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installing Dependencies

To set up the development environment, run:

```bash
npm install
```

### Running the Tool Locally

If you're working on the tool or want to test it locally, you can run it using:

```bash
npm start
```

This will run the tool with the `ts-node` interpreter.

### Building the Project

To compile the TypeScript files to JavaScript, run:

```bash
npm run build
```

### Running Tests

Currently, there are no tests defined, but you can set up testing frameworks like Jest or Mocha for future test setups.

## Contributing

We welcome contributions to the project! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your forked repository (`git push origin feature-xyz`).
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by **Shantanu Bhat**  
[LinkedIn](https://www.linkedin.com/in/shantanu-bhat)

## Acknowledgments

- **Giget**: This tool relies on the `giget` package for downloading GitHub folders.
- **Open Source Community**: Thank you to all the contributors who help make the open-source community thrive!
