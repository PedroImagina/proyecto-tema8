"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testRoutes_1 = __importDefault(require("./routes/testRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const app = (0, express_1.default)();
// Middleware para parsear JSON
app.use(express_1.default.json());
// Registrar rutas
app.use('/', testRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.use('/services', serviceRoutes_1.default);
app.use('/appointments', appointmentRoutes_1.default);
exports.default = app;
