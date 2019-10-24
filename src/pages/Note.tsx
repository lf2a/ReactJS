// react import
import React, { useState, useEffect } from 'react';


const Note: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState<{ title: string, description: string }[]>([]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    /* const note = {
      title,
      description
    } */

    setNotes(old => [...old, {
      title,
      description
    }]);
  }

  function save() {
    var nts: any = localStorage.getItem('notes');
    setNotes(JSON.parse(nts));
    console.log(JSON.parse(nts));
    console.log(notes);
  }

  return (
    <div id="note">
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input type="text"
            value={title}
            onChange={e => { setTitle(e.target.value) }}
            placeholder="Digite o titulo da nota"
            autoFocus
            required />

          <input type="text"
            value={description}
            onChange={e => { setDescription(e.target.value) }}
            placeholder="Digite o conteudo da nota"
            required />

          <button type="submit">Adicionar</button>
        </form>
        <button onClick={save}>Salvar</button>
      </div>

      <div id="notes">
        {notes.map((e, i) => {
          return (<p key={i}>{e.title} - {e.description}</p>)
        })}
      </div>
    </div>
  );
};

export default Note;