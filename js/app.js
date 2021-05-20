function iniciar() {
  /**
   * Componentes do editor
   */
  const campoHtml = document.getElementById("html");
  const campoCss = document.getElementById("css");
  const campoJs = document.getElementById("js");
  const preview = document.getElementById("preview");

  /**
   *  método que ira pegar o que estiver no <textarea>
   * e inserir no <iframe>
   */
  function render() {
    let iframeComponent = preview.contentWindow.document;

    iframeComponent.open();
    iframeComponent.writeln(`
      ${campoHtml.innerText}
      <style>${campoCss.innerText}</style>
      <script>${campoJs.innerText}</script>`);
    iframeComponent.close();
  }

  /**
   * Cria um listener que chama o render
   * sempre que digitar algo
   */
  function compile() {
    document.addEventListener("keyup", function () {
      render();
    });
  }

  /**
   * Cria um listener
   * e renderiza os primeiros valores
   */
  compile();
  render();
}

iniciar();
