require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });

class MonacoEditor extends HTMLElement {
    get codeValue() {
        return this.getAttribute('codeValue');
    }

    set codeValue(value) {
        this.setAttribute('codeValue', value);
    }

    get language() {
        return this.getAttribute('language');
    }

    set language(language) {
        this.setAttribute('language', language);
    }

    get theme() {
        return this.getAttribute('theme');
    }

    set theme(theme) {
        this.setAttribute('theme', theme);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        require(['vs/editor/editor.main'], () => {
            monaco.editor.create(this, {
                value: this.codeValue,
                language: this.language,
                theme: this.theme
            });
        });
    }
}

customElements.define('monaco-editor', MonacoEditor);