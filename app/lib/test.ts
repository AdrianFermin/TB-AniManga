import mysql from "mysql2/promise";
import { testType } from "./definitions";

const createConn = async() => {
    const pool = await mysql.createPool({
        host: process.env.MYSQL_ADDON_HOST,
        database: process.env.MYSQL_ADDON_DB,
        user: process.env.MYSQL_ADDON_USER,
        password: process.env.MYSQL_ADDON_PASSWORD,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0
        });

        return pool;
}

const executeQuery = async () => {
    
    try{
        const pool = await createConn();
        const [result] = await pool.execute("SELECT * FROM prueba", []);
        await pool.end();
        return(result as Array<testType>);
    } catch (error){
        console.error(error)
        //return error;
    }

}

export default executeQuery