import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_palenight extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_palenight',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_palenight is activated!');
    const style = 'jupyterlab_palenight/index.css';

    manager.register({
      name: 'Jupyterlab Material Palenight',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
