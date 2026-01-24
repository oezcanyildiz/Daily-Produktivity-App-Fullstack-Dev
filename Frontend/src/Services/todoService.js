const API_URL = 'http://localhost:8080/api/todos';

// Holt Token für Authorization Header
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

// Alle Todos vom eingeloggten User holen
export const getTodos = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error('Todos konnten nicht geladen werden');
  }

  return await response.json();
};

// Neues Todo erstellen
export const createTodo = async (title, description, dueDate, priority) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify({
      title,
      description,
      dueDate,
      priority: priority || 'MEDIUM',
      status: 'OPEN',
    }),
  });

  if (!response.ok) {
    throw new Error('Todo konnte nicht erstellt werden');
  }

  return await response.json();
};

// Todo aktualisieren
export const updateTodo = async (id, todoData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: getAuthHeader(),
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error('Todo konnte nicht aktualisiert werden');
  }

  return await response.json();
};

// Todo löschen
export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error('Todo konnte nicht gelöscht werden');
  }

  return true;
};

// Todo Status ändern (z.B. erledigt/offen)
export const toggleTodoStatus = async (id, currentStatus) => {
  const newStatus = currentStatus === 'DONE' ? 'OPEN' : 'DONE';
  
  return await updateTodo(id, { status: newStatus });
};

// Ein einzelnes Todo holen
export const getTodoById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error('Todo konnte nicht geladen werden');
  }

  return await response.json();
};