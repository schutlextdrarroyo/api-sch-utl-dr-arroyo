import {Router} from "express";
import {methods as prestamosController} from "./../controllers/prestamos.controller";
import {methods as administradoresController} from "./../controllers/administradores.controller";

const router = Router();

router.post("/administradores/auth", administradoresController.authAdministrador);

router.get("/prestamos", prestamosController.getPrestamos);
router.get("/prestamos/:id", prestamosController.getPrestamo);
router.post("/prestamos", prestamosController.regPrestamo);
router.delete("/prestamos/:id", prestamosController.delPrestamo);
router.put("/prestamos/:id", prestamosController.updPrestamo);

export default router;