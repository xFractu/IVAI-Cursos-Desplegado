import { Button, Card, CardActions, CardContent, CardHeader, Typography, Grid, TextField, Select, MenuItem, Grid2, styled, Input } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import Arrow from '../assets/cerrar2.svg'
import '../Estilos/PopupAgregarCurso.css'
import '../Principal/Principal.css'
import axios from 'axios';
import PopupMSJBien from './PopupMSJBien.jsx';
import ConfirmIcon from '../assets/check.svg';
import ErrorIcon from '../assets/error.svg';
import facebook from '../assets/facebook.svg';

function PopupCrearCurso({ onClose,onOpenPopupMsj }) {

    const [dataTiposCurso, setDataTiposCurso] = useState([])
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dateInputRef = useRef(null);
    const timeInputRef = useRef(null);

    const [errors, setErrors] = useState({});

    const [isError, setIsError] = useState(false);

    const [dataError, setDataError] = useState({
        titulo: '',
        mensaje: ''
    })

    const getTiposCurso = async () => {
        try {
            // const response = await fetch('http://187.216.225.247:4567/tipos');
            const response = await fetch('http://localhost:4567/tipos');
            const data = await response.json();
            setDataTiposCurso(data);
        } catch (error) {
            console.error('Error al obtener los tipos de curso:', error);
        }
    };

    useEffect(() => {
        const fetchTiposCurso = async () => {
            const tipos = await getTiposCurso();
            setItems(tipos);
        };

        fetchTiposCurso();
    }, []);

    const [DataCurso, setDataCurso] = useState({
        nombreCurso: '',
        fecha: '',
        hora: '',
        imparte: '',
        Cupo: 0,
        estatusCupo: 0,
        estatusCurso: '',
        modalidad: '',
        direccion: '',
        correoSeguimiento: 'cursos.ivai@gmail.com',
        tipo: '',
        curso: '',
        ligaTeams: '',
        valorCurricular: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataCurso({ ...DataCurso, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };


    const validateFields = () => {
        const newErrors = {};

        if (!DataCurso.nombreCurso) newErrors.nombreCurso = "El nombre es obligatorio.";

        if (!DataCurso.fecha) newErrors.fecha = "La fecha es obligatoria.";

        if (!DataCurso.hora) newErrors.hora = "La hora es obligatoria."

        if (!DataCurso.modalidad) newErrors.modalidad = "La modalidad es obligatoria.";

        if (!DataCurso.imparte) newErrors.imparte = "La persona que imparte el curso es obligatoria.";

        if (!DataCurso.estatusCupo) newErrors.estatusCupo = "El cupo es obligatorio.";

        if (!DataCurso.estatusCurso) newErrors.estatusCurso = "El estado del curso es obligatorio.";

        if (!DataCurso.tipo) newErrors.tipo = "El tipo de curso es obligatorio.";

        if (!DataCurso.curso) newErrors.curso = "El curso es obligatorio.";

        if (!DataCurso.valorCurricular) newErrors.valorCurricular = "El valor curricular del curso es obligatorio.";

        return newErrors;
    };

    const handleDateInputClick = () => {
        dateInputRef.current.showPicker();
    };

    const handleTimeInputClick = () => {
        timeInputRef.current.showPicker();
    };

    const handleSubmit = async () => {

            const validationErrors = validateFields();
        
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
        
            try {
                // const respuesta = await axios.post("http://187.216.225.247:4567/registroCurso", DataCurso);
                const respuesta = await axios.post("http://localhost:4567/registroCurso", DataCurso);
        
                if (respuesta.status === 200) {
                    onOpenPopupMsj({
                        titulo: 'Curso registrado',
                        mensaje: 'El curso se ha registrado correctamente'
                    }, false); // `false` indica que no es un error.
                } else {
                    onOpenPopupMsj({
                        titulo: 'Error en el Registro',
                        mensaje: 'Ocurrió un error durante el proceso. Por favor, inténtelo de nuevo más tarde.'
                    }, true); // `true` indica que es un error.
                }
            } catch (error) {
                console.error('Error al registrar el curso:', error);
                onOpenPopupMsj({
                    titulo: 'Error del servidor',
                    mensaje: 'No se pudo procesar la solicitud. Por favor, inténtelo de nuevo más tarde.'
                }, true); // `true` indica que es un error.
            }
        };

    const handleClose = () => {
        setIsPopupOpen(false);
        onClose();
    };

    return (
        <>

            <div className='layout_agregar_curso'>
                <header className="header_agregar_curso">
                    <CardHeader
                        sx={{ color: '#FFFFFF', width: '100%', marginLeft: -4 }}
                        title={
                            <Grid container justifyContent='space-between' alignItems='center'>
                                <Grid item>

                                </Grid>
                                <Grid item>

                                </Grid>
                                <Grid item sx={{ alignItems: 'start', marginLeft: -20 }}>
                                    <Typography variant='h4' sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: 0, textAlign: 'center', maxWidth: 'auto', maxHeight: 'auto' }}>
                                        Agregar Curso
                                    </Typography>
                                </Grid>

                                <Grid item>

                                    <img
                                        src={Arrow}
                                        alt="Web"
                                        className='IconoSalir'
                                        onClick={onClose}
                                    />
                                </Grid>

                            </Grid>
                        }
                    />

                </header>

                <main className="main_agregar_curso">
                    <div className='ScrollAgregar'>

                        <CardContent sx={{ color: '#FFFFFF' }}>
                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF',  fontSize: '2vh', fontWeight: 'bold' }}>Nombre del Curso:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth variant='outlined' size='small' name='nombreCurso'
                                        value={DataCurso.nombreCurso}
                                        onChange={handleInputChange}
                                        error={!!errors.nombreCurso} helperText={errors.nombreCurso}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px',
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Fecha:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type='date' variant='outlined' size='small' name='fecha' inputRef={dateInputRef} onClick={handleDateInputClick} onChange={handleInputChange}
                                        error={!!errors.fecha} helperText={errors.fecha}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Hora:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type='time' variant='outlined' size='small' name='hora' inputRef={timeInputRef} onClick={handleTimeInputClick} onChange={handleInputChange}
                                        error={!!errors.hora} helperText={errors.hora} sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Modalidad:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        name='modalidad'
                                        value={DataCurso.modalidad}
                                        error={!!errors.modalidad} helperText={errors.modalidad}

                                        onChange={handleInputChange}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }}
                                        defaultValue=''
                                    >
                                        <MenuItem value='Presencial'>Presencial</MenuItem>
                                        <MenuItem value='Virtual'>Virtual</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>

                            {DataCurso.modalidad === 'Presencial' && (
                                <Grid container item xs={12} alignItems="center" spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Dirección:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth variant='outlined' size='small' name='direccion'
                                            onChange={handleInputChange}

                                            sx={{
                                                backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '15px',
                                                }
                                            }} />
                                    </Grid>
                                </Grid>
                            )}

                            {DataCurso.modalidad === 'Virtual' && (
                                <Grid container item xs={12} alignItems="center" spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Liga Teams:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth variant='outlined' size='small' name='ligaTeams'
                                            onChange={handleInputChange}
                                            sx={{
                                                backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '15px',
                                                }
                                            }} />
                                    </Grid>
                                </Grid>
                            )}

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Persona que Imparte el Curso:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth variant='outlined' size='small' name='imparte'
                                        value={DataCurso.imparte}
                                        onChange={handleInputChange}
                                        error={!!errors.imparte} helperText={errors.imparte}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Lugares Disponibles:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth variant='outlined' size='small' name='estatusCupo'
                                        error={!!errors.estatusCupo} helperText={errors.estatusCupo}
                                        onChange={handleInputChange}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Correo de Seguimiento:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth variant='outlined' placeholder='cursos.ivai@gmail.com' size='small' name='correoSeguimiento'
                                        disabled='true'
                                        value='cursos.ivai@gmail.com'
                                        onChange={handleInputChange} sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Estatus Curso:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        name='estatusCurso'
                                        value={DataCurso.estatusCurso}
                                        error={!!errors.estatusCurso} helperText={errors.estatusCurso}
                                        onChange={handleInputChange}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }}
                                        defaultValue=''
                                    >
                                        <MenuItem value='Activo'>Activo</MenuItem>
                                        <MenuItem value='Finalizado'>Finalizado</MenuItem>
                                        <MenuItem value='Cancelado'>Cancelado</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Tipo Curso:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        name='tipo'
                                        value={DataCurso.tipo}
                                        error={!!errors.tipo} helperText={errors.tipo}
                                        onChange={handleInputChange}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }}
                                        defaultValue=''
                                    >
                                        <MenuItem value='Conferencia'>Conferencia</MenuItem>
                                        <MenuItem value='Cursos'>Curso</MenuItem>
                                        <MenuItem value='Foro'>Foro</MenuItem>
                                        <MenuItem value='Jornada'>Jornada</MenuItem>
                                        <MenuItem value='Taller'>Taller</MenuItem>
                                        <MenuItem value='Segundo Trimestre 2017'>Segundo Trimestre 2017</MenuItem>
                                        <MenuItem value='Otro'>Otro</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Curso:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        name='curso'
                                        value={DataCurso.curso}
                                        error={!!errors.curso} helperText={errors.curso}
                                        onChange={handleInputChange}
                                        sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }}
                                        defaultValue=''
                                    >
                                        {dataTiposCurso.map((item) => (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center' spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='body2' sx={{ color: '#FFFFFF', fontSize: '2vh', fontWeight: 'bold' }}>Valor Curricular en Horas:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth variant='outlined' size='small' name='valorCurricular'
                                        value={DataCurso.valorCurricular}
                                        error={!!errors.valorCurricular} helperText={errors.valorCurricular}
                                        onChange={handleInputChange} sx={{
                                            backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                            }
                                        }} />
                                </Grid>
                            </Grid>
                        </CardContent>

                    </div>
                </main>

                <footer className="footer_agregar_curso">

                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button onClick={handleSubmit} variant='contained' sx={{ width: '10vw', backgroundColor: '#E7B756', color: '#1E1E1E', marginTop: 2 }}>Guardar</Button>
                    </CardActions>
                </footer>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay-confirmation-registro">
                    <div className={`popup-confirmation-registro ${isPopupOpen ? 'popup-show' : 'popup-hide'}`}>
                        <PopupMSJBien
                            icon={isError ? ErrorIcon : ConfirmIcon} 
                            title={dataError.titulo} 
                            message={dataError.mensaje} 
                            buttonText="Cerrar"
                            onClose={handleClose}
                            
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default PopupCrearCurso;
