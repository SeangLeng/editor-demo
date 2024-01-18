import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        apiKey='zbsujtj1175df0ddevce4mecs5f9h7jwdmr36qsavtdkaokf'
        init={{
          height: 1000,
          menubar: true,
          plugins: "advcode advlist advtable anchor autocorrect autolink autosave casechange charmap checklist codesample directionality editimage emoticons export footnotes formatpainter help image insertdatetime link linkchecker lists media mediaembed mergetags nonbreaking pagebreak permanentpen powerpaste searchreplace table tableofcontents tinymcespellchecker typography visualblocks visualchars wordcount",
          toolbar: "undo redo spellcheckdialog  | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image | align lineheight checklist bullist numlist | indent outdent | removeformat typography",
          toolbar_sticky: true,
          autosave_restore_when_empty: true,
          spellchecker_active: true,
          spellchecker_language: 'en_US',
          spellchecker_languages: 'English (United States)=en_US,English (United Kingdom)=en_GB,Danish=da,French=fr,German=de,Italian=it,Polish=pl,Spanish=es,Swedish=sv',
          typography_langs: ['en-US'],
          typography_default_lang: 'en-US',
          font_family_formats: 'Arial=arial,helvetica,sans-serif; Noto Sans Khmer=Noto Sans Khmer,sans-serif'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
