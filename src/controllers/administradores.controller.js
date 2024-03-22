import { getConnection } from "./../database/database";

const authAdministrador = async (req, res) => {
    try {
        const { nomusuario, pass } = req.body;
        if (nomusuario===undefined || pass===undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, llene todos los campos." });
        }
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM administradores WHERE nomusuario = ? AND pass = ?", [nomusuario, pass]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    authAdministrador
};