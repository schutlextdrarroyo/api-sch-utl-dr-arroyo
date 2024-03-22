import { getConnection } from "./../database/database";

const getPrestamo = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, matricula, numempleado, fecha FROM prestamos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.estatus(500);
        res.sent(error.message);
    }
};

const getPrestamos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, matricula, numempleado, fecha FROM prestamos");
        res.json(result);
    } catch (error) {
        res.estatus(500);
        res.sent(error.message);
    }
};

const regPrestamo = async (req, res) => {
    try {
        const { matricula, numempleado } = req.body;
        if (matricula===undefined || numempleado===undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, llene todos los campos." });
        }
        const prestamo = { matricula, numempleado };
        const connection = await getConnection();
        await connection.query("INSERT INTO prestamos SET ?", prestamo);
        res.json({message:"El préstamo ha sido registrado con éxito."});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const delPrestamo = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM prestamos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.estatus(500);
        res.sent(error.message);
    }
};

const updPrestamo = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { matricula, numempleado } = req.body;
        if (matricula===undefined || numempleado===undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, llene todos los campos." });
        }
        const prestamo = { id, matricula, numempleado };
        const connection = await getConnection();
        const result = await connection.query("UPDATE prestamos SET ? WHERE id = ?", [prestamo, id]);
        res.json(result);
    } catch (error) {
        res.estatus(500);
        res.sent(error.message);
    }
};

export const methods = {
    getPrestamo,
    getPrestamos,
    delPrestamo,
    regPrestamo,
    updPrestamo
};