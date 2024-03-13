import { createPool } from 'mariadb'
import { db_user, db_name } from '../config.js'

const pool = createPool({
    user: db_user,
    database: db_name,
    connectionLimit: 5,
})

pool.setUser = (email, password) => {
    pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [
        email,
        password,
    ])
}

pool.getUser = async (email) => {
    const pass = await pool.query(
        'SELECT password,id FROM users WHERE email = ?',
        [email]
    )

    return pass[0]
}

pool.setTask = async (table, user_id, title) => {
    const taskId = await pool.query(
        `INSERT INTO ${table} (user_id, title) VALUES (?, ?)`,
        [user_id, title]
    )
    return taskId
}

pool.getTaskList = async (table, user_id) => {
    const pass = await pool.query(
        `SELECT id,title,status,time,path,pid FROM ${table} WHERE user_id = ?`,
        [user_id]
    )
    return pass
}

pool.getTaskId = async (table, user_id, title) => {
    const pass = await pool.query(
        `SELECT id FROM ${table} WHERE user_id = ? AND title = ?`,
        [user_id, title]
    )

    return pass[0].id
}

pool.setTaskStatusSuccess = async (table, result_path, user_id, task_id) => {
    await pool.query(
        `UPDATE ${table} SET status = 1, path = ?, pid = null WHERE user_id = ? AND id = ?`,
        [result_path, user_id, task_id]
    )
}

pool.setTaskStatusFailed = async (table, user_id, task_id) => {
    await pool.query(
        `UPDATE ${table} SET status = 0, pid = null WHERE user_id = ? AND id = ?`,
        [user_id, task_id]
    )
}

pool.getTaskPid = async (table, user_id, task_id) => {
    const pid = await pool.query(
        `SELECT pid FROM ${table} WHERE user_id = ? AND id = ?`,
        [user_id, task_id]
    )
    return pid[0].pid
}

pool.setTaskPid = async (table, pid, user_id, task_id) => {
    await pool.query(
        `UPDATE ${table} SET pid = ? WHERE user_id = ? AND id = ?`,
        [pid, user_id, task_id]
    )
}

pool.getCount = async (name) => {
    const pass = await pool.query(`SELECT count FROM counts WHERE name = ?`, [
        name,
    ])

    return pass[0].count
}

pool.addCount = async (name) => {
    await pool.query(`UPDATE counts SET count=count+1 WHERE name = ?`, [name])
}

export default async (ctx, next) => {
    ctx.$db = pool
    await next()
}
