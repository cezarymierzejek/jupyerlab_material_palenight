# JupyerLab Material: Palenight

![Preview](palenight_screenshot.png)

A port of the Material Design Palenight Theme from VS Code and Sublime Text to JupyterLab

Credits to the original color scheme creators: https://material-theme.site


## Requirements

* JupyterLab >= 3.0

## Install

To install it as a prebuilt extension (requires JupyterLab >= 3.0):

```bash
pip install jupyterlab_palenight 
```

Or install it as a source extension:

```bash
jupyter labextension install jupyterlab_palenight
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_palenight directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Uninstall

```bash
pip uninstall jupyterlab_palenight
```
or 

```bash
jupyter labextension uninstall jupyterlab_palenight
```
