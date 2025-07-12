# Biblioteca de Componentes React

Esta é uma biblioteca de componentes React reutilizáveis para agilizar o desenvolvimento de interfaces de usuário.

## Instalação

Esta biblioteca é instalada diretamente do GitHub. Execute o seguinte comando:

```bash
npm install git+https://github.com/seu-usuario/seu-repositorio.git
```

**Observação:** Substitua `seu-usuario` e `seu-repositorio` pelos valores corretos.

## Como Usar

Aqui está um exemplo básico de como usar o componente `Button`:

```jsx
import { Button } from 'sua-biblioteca-de-componentes';

function App() {
  return (
    <Button onClick={() => alert('Clicado!')} variant="primary">
      Clique em Mim
    </Button>
  );
}
```

## Componentes

| Componente              | Descrição                                                              | Props                                                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Button`                | Um botão customizável com diferentes variantes.                        | `children`, `onClick`, `disabled`, `className`, `variant` ("primary", "secondary", "cancel", "danger")                                                                                        |
| `FormInput`             | Um campo de input para formulários com validação e ícones.               | `isValidating`, `label`, `error`, `success`, `disabled`, `messageError`, `icon`, `className`, `onChange`                                                                                       |
| `FormInputPassword`     | Um campo de input específico para senhas com opção de mostrar/ocultar. | (Similar ao `FormInput`)                                                                                                                                                                       |
| `FormLabel`             | Um rótulo para campos de formulário.                                   | `children`                                                                                                                                                                                     |
| `FormSelect`            | Um campo de seleção para formulários.                                  | `options`, `value`, `onChange`, `label`, `error`, `success`, `disabled`, `messageError`                                                                                                      |
| `FormTextArea`          | Uma área de texto para formulários.                                    | (Similar ao `FormInput`)                                                                                                                                                                       |
| `MessageError`          | Exibe uma mensagem de erro.                                            | `children`                                                                                                                                                                                     |
| `FormSlider`            | Um controle deslizante para selecionar um valor em um intervalo.       | `value`, `onChange`, `min`, `max`, `step`, `disabled`                                                                                                                                           |
| `FormSwitch`            | Um interruptor para alternar entre dois estados.                       | `checked`, `onChange`, `disabled`                                                                                                                                                              |
| `Progress`              | Uma barra de progresso para indicar o andamento.                       | `value`, `max`                                                                                                                                                                                 |
| `ModalConfirmation`     | Um modal para confirmar ações do usuário.                              | `isOpen`, `onClose`, `description`, `title`, `performAction`, `className`, `isFullscreen`                                                                                                        |
| `ModalDefault`          | Um modal genérico.                                                     | `isOpen`, `onClose`, `title`, `children`, `className`, `isFullscreen`                                                                                                                            |
| `Pagination`            | Componente para navegar entre páginas.                                 | `currentPage`, `totalPages`, `onPageChange`                                                                                                                                                    |
| `Table`                 | Exibe dados em formato de tabela.                                      | `columns`, `data`                                                                                                                                                                              |
| `TableAction`           | Ações para serem usadas dentro de uma `Table`.                         | `actions`                                                                                                                                                                                      |
| `Tooltip`               | Exibe informações adicionais ao passar o mouse sobre um elemento.      | `text`, `children`                                                                                                                                                                             |
| `Tabs`                  | Permite a navegação entre diferentes seções de conteúdo.               | `tabs`, `activeTab`, `onTabClick`                                                                                                                                                              |
| `VerticalTabs`          | Versão vertical do componente `Tabs`.                                  | (Similar ao `Tabs`)                                                                                                                                                                            |
| `Accordion`             | Um componente que permite expandir e recolher seções de conteúdo.      | `title`, `children`                                                                                                                                                                            |
| `CustomLink`            | Um link customizável.                                                  | `href`, `children`, `className`                                                                                                                                                                |
| `SnackBar`              | Exibe notificações temporárias (toasts).                               | `message`, `severity` ("success", "error", "warning", "info"), `onClose`                                                                                                                       |
| `ThemeToggle`           | Um botão para alternar entre temas claro e escuro.                     |                                                                                                                                                                                                |
| `ActivityIndicator`     | Um indicador de atividade para mostrar que algo está carregando.       | `size`                                                                                                                                                                                         |
| `ModalExpandImage`      | Um modal para expandir e visualizar uma imagem.                        | `isOpen`, `onClose`, `src`, `alt`                                                                                                                                                              |
| `FormSelectArray`       | Um campo de seleção que permite múltiplas escolhas.                    | (Similar ao `FormSelect`)                                                                                                                                                                       |
| `ExpandableTable`       | Uma tabela com linhas que podem ser expandidas para mostrar mais detalhes. | (Similar ao `Table`)                                                                                                                                                                           |
| `FormInputDate`         | Um campo de input para datas.                                          | (Similar ao `FormInput`)                                                                                                                                                                       |
| `FormInputArray`        | Um campo de input que permite adicionar múltiplos valores.             | `values`, `onChange`                                                                                                                                                                           |
| `DatePicker`            | Um seletor de datas.                                                   | `selected`, `onChange`                                                                                                                                                                         |
| `AccordionGroup`        | Um grupo de `Accordion`s onde apenas um pode estar aberto por vez.     | `items`                                                                                                                                                                                        |
