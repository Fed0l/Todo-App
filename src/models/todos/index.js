import { query } from "../../core/database/database-handler.js";

const schema = "public";
const table = "todos";

export async function getall() {
  return query(`select * 
        from ${schema}.${table}`);
}

export async function getTodoByID(id) {
  const sql = `select * 
    from ${schema}.${table}
        where id = $1;`;
  const res = await query(sql, [id]);
  return res;
}

export async function createNewItem(title, description, is_completed) {
  const sql = `INSERT INTO 
    ${schema}.${table} (title, description, is_completed) VALUES 
    ($1, $2, $3);`;
  const res = query(sql, [title, description, is_completed]);
  return res;
}

export async function updateTodoById(id, title, description, is_completed) {
  const res = await getTodoByID(id);
  console.log(res);
  let sql;
  if (
    res[0].title != title ||
    res[0].description != description ||
    res[0].is_completed != is_completed
  ) {
    sql = `update ${schema}.${table}
    set title = $2 , description =$3, is_completed = $4 where id =$1;`;
    console.log("2");
  }
  const result = await query(sql, [id, title, description, is_completed]);
  console.log("3");
  return result;
}

export async function deleteTodoById(id) {
  const sql = `delete from ${schema}.${table}
     where id = $1;`;
    const res = await query(sql, [id]);
    return res
}

export async function deleteAllTodos(){
    return query(`delete from ${schema}.${table};`);
}

export async function updateAllTodosStatus(){
    return query(`update ${schema}.${table} set is_completed = true;`);
}


