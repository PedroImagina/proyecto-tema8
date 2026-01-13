-- Usuario admin por defecto
-- Email: admin@example.com
-- Password: admin1234
INSERT INTO users (id, name, email, password_hash, role) VALUES
('00000000-0000-0000-0000-000000000001', 'Administrador', 'admin@example.com', '$2a$10$5/2JhDimIWTuG1P1VOIaSuuPb8RWW7MKKPRC968oLQ7a5vK7Rodma', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Servicios de ejemplo
INSERT INTO services (id, name, duration_minutes) VALUES
('10000000-0000-0000-0000-000000000001', 'Corte de Cabello', 30),
('10000000-0000-0000-0000-000000000002', 'Corte + Barba', 45),
('10000000-0000-0000-0000-000000000003', 'Afeitado Completo', 20)
ON CONFLICT DO NOTHING;

