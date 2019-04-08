# HTML

&nbsp;

## Definição de HTML
É uma linguagem de marcação que tem as seguintes responsabilidades.

- Conteudo;
- Semantico - (utilizar as tags de forma orreta para demarcação de conteudo);

&nbsp;

## Tags do HTML
- `<h1>` - heading 1 - 6 - Usamos ele quando queremos definir um titulo.

- `<a>` - ( `a` de ancora) - tag *__`<a>`__* é o *link*, é utilizado para definir a nevegação. Você cria *links* para outros sites e paginas para navegação.

&nbsp;

## Tag de Estrutra

- `<nav>` - Tag de navegação, é utilizado para definir e agrupar o menu de navegação da pagina. 

- `<header>` - Tag utilizada para agrupar e definir o cabeçalho da pagina.

- `<head>` - Tag utilizada para agrupar as tags de configuração do site, ou seja tags que não serão mostradas na pagina, mas que define a forma como a pagina se comportará ou será exibida.

&nbsp;

## Tag de Configuração

- `<DOCTYPE>` - Esta define para o browser qual a versão do *HTML* será utilizada pelo navegador.

- `<html>` - Esta tag define onde começa e termina o conteudo *html* da pagina. Todo o código *html* do site e de qualquer pagina, tem que estar dentro desta tag `<HTML>`.

- `<meta>` - Tag responsavel por configurar e definir qual a tabela de caracter o browser irá utilizar, no caso do portugues Brasil que tem caracteres como *__"ç"__* entre outros é utilizado a tabela `utf-8`.
  - Essa tag diferente de outras, não possui fechamento, isso é porque ela não tem conteudo, ela só tem opções e parametros de configuração que será atribuido ao browser.

- `<title>` - Essa tag defini o titulo da pagina que é apresetado nas abas do navegador.
  - Éla é definida na tag `<head>`, por ser uma tag que não temos controle na sua apresentação e estilização.

&nbsp;

# CSS
É uma linguagem de estilo e tem as seguintes responsabilidades:

- Visual.
- stylesheet - Folha de estilo em cascata

## Float
- É a propriedade que cria um novo contexto para o elemento.
- Os elementos abaixo sobem ocupando o contexto do elemento que agora esta no novo contexto. Este elemento fica atrás do elemento com float.

### - Regras e observações:
 - O conteudo do elemento que sobe sempre será mostrado.
   - O browser ajustará este conteudo para sempre ser mostrado.
   - Nuca esconde o conteudo

- O tamanho do elemento com float que antes ocupava o tamanho total do elemento pai, agora ocupa somente o tamanho do conteudo.
  - width e height com float é o tamanho do conteudo.

- O pai ignora o elemento com float.
   - Se todos os elementos dentro do pai estiverem com float, o pai praticamente some, pois ele ignora todos os elementos com float.

## Overflow
 - *`overflow: hidden;`* É a propriedade que esconde todo o conteudo que *vaza* do tamanho do elemento.
    - Por padrão o navegado não esconde o conteudo que por alguma configuração de tamanho *vaza* do tamanho do elemeto.

- Esta proprieda aplica um recalculo de tamanho de contexto quando aplicado a elementos que estão com float.
   - Ele aplica o tamanho deste elemento para o tamanho dos elemento que estão com float.

## Padding - Margin
`margin` - É o respiro ou espaçamento entre os elementos.

`padding` - É o respiro ou espaçamento entre o conteudo e seu proprio elemento.

`vertical-align` funciona apenas com o *display: inlien-block* ou seja te que ter no minimo 2 elementos que estaja em linha para poder fazer o alinhamento. O padrão é *baseline* a base da linha.