import './App.css'
import { useState } from 'react'
import TodoItem from './components/TodoItem'

function App() {

const [tareas, setTareas] = useState([
    { id: 1, texto: ' lol', completada: false },
    { id: 2, texto: 'Revisar correo', completada: false }
  ]);

  // LÓGICA 1: Eliminar
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(t => t.id !== id);
    setTareas(nuevasTareas);
  };

  // LÓGICA 2: Marcar como completada/pendiente
  const toggleTarea = (id) => {
    const tareasActualizadas = tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(tareasActualizadas);
  };

  // LÓGICA 3: Cálculos para los contadores
  const total = tareas.length;
  const completadas = tareas.filter(t => t.completada).length;


  return (
    <>
      <div className="container center">
        <h1 className="center title">TO-DO App</h1>

        <div className="todo-stats" role="status" aria-live="polite">
          <span>Total de tareas: {total}</span>
          <span>Tareas completadas: {completadas}</span>
        </div>
        <div className="controls flow-right">
          <input type="text" placeholder="Nueva tarea" aria-label="Título de la tarea" />
          <button type="button" className="button">
            Agregar
          </button>
        </div>


        <ul id="todoList" className="todo-list">
         {/*  <li className="todo-container" data-id="1">
            <div className="flow-right">
              <input
                type="checkbox"
                className="todo-checkbox"
                defaultChecked
                aria-label="Completada: xd leche"
              />
              <span>Comprar leche</span>
              <button type="button" className="button todo-delete">
                Eliminar
              </button>
            </div>
          )}
        </section>

        {/* Inspiration Card / Asymmetric Element */}
        <section className="mt-16 mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative h-48 rounded-[32px] overflow-hidden group">
            <img
              alt="Minimalist study space"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDktZ7BHhzpwQpdAOhHLuoPeKX1To8OcAHrqzntWu7eP1bavDJjDo7wyPrIajlkPJP4iryRf94W5AoKKKCluE4BCZgw8vQt_sldAHk0-2IvZs0VDhkYMO49VpJjjGyou2Lg4v6zq-C8nzrje8c-SvwZf14p6Rckxcr6SMAsSc20H00b2HzXzj9EnpKPg10C86bYNAbG-XYLKLVGo1Ff8QQ2UqF7RFzzqSYtZOU8J4Hn7Duc4U4vKIQyeywaNnNTliaMO7qkWPFIDUs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-8">
              <p className="text-on-primary font-headline text-xl font-bold">
                &ldquo;Focus is the art of saying no.&rdquo;
              </p>
              <p className="text-on-primary/80 text-sm">Steve Jobs</p>
            </div>
          </li> */}
          {tareas.map(t => (
          <TodoItem 
            key={t.id} 
            tarea={t} 
            onDelete={eliminarTarea} 
            onToggle={toggleTarea} 
          />
        ))}
          
        </ul>
      </div>
    </>
  
)
}

export default App;
