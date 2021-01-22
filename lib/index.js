import { IThemeManager } from '@jupyterlab/apputils';
/**
 * Initialization data for the jupyterlab_palenight extension.
 */
const extension = {
    id: 'jupyterlab_palenight',
    requires: [IThemeManager],
    autoStart: true,
    activate: (app, manager) => {
        console.log('JupyterLab extension jupyterlab_palenight is activated!');
        const style = 'jupyterlab_palenight/index.css';
        manager.register({
            name: 'jupyterlab_palenight',
            isLight: false,
            themeScrollbars: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    }
};
export default extension;
