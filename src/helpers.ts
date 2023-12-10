import { IBoxShadowProps } from './model';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const getBoxShadowString = (boxShadowProps: IBoxShadowProps): string => {
  return `${boxShadowProps.activeInset} ${boxShadowProps.horizontalOffset}px ${boxShadowProps.verticalOffset}px ${boxShadowProps.blurRadius}px ${boxShadowProps.spreadRadius}px ${boxShadowProps.color}`;
};

export const getStringifiedShadowLayers = (
  boxShadowProps: IBoxShadowProps[]
) => {
  const showList = boxShadowProps.map((shadowLayer) =>
    getBoxShadowString(shadowLayer).trim()
  );

  return showList.join(', ');
};

export const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions =
  {
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: 'on',
    accessibilitySupport: 'auto',
    autoClosingBrackets: 'always',
    autoIndent: 'full',
    automaticLayout: true,
    bracketPairColorization: {
      enabled: true,
    },
    codeLens: true,
    colorDecorators: true,
    contextmenu: true,
    cursorBlinking: 'blink',
    cursorSmoothCaretAnimation: 'off',
    cursorStyle: 'line',
    disableLayerHinting: false,
    disableMonospaceOptimizations: false,
    dragAndDrop: false,
    fixedOverflowWidgets: false,
    folding: true,
    foldingStrategy: 'auto',
    fontLigatures: false,
    formatOnPaste: false,
    formatOnType: false,
    hideCursorInOverviewRuler: false,
    links: true,
    mouseWheelZoom: false,
    multiCursorMergeOverlapping: true,
    multiCursorModifier: 'alt',
    overviewRulerBorder: true,
    overviewRulerLanes: 2,
    quickSuggestions: true,
    quickSuggestionsDelay: 100,
    readOnly: true,
    renderControlCharacters: false,
    renderFinalNewline: 'on',
    renderLineHighlight: 'all',
    renderWhitespace: 'none',
    revealHorizontalRightPadding: 30,
    roundedSelection: true,
    rulers: [],
    scrollBeyondLastColumn: 5,
    scrollBeyondLastLine: true,
    selectOnLineNumbers: true,
    selectionClipboard: true,
    selectionHighlight: true,
    showFoldingControls: 'mouseover',
    smoothScrolling: false,
    suggestOnTriggerCharacters: true,
    wordBasedSuggestions: 'currentDocument',
    wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
    wordWrap: 'off',
    wordWrapBreakAfterCharacters: '\t})]?|&,;',
    wordWrapBreakBeforeCharacters: '{([+',
    wordWrapColumn: 80,
    wrappingIndent: 'none',
  };
