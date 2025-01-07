import { Button, Card, CardActions, CardContent, CardHeader, Typography, Grid, TextField, Select, MenuItem, Grid2, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import PopupMSJConfirmacion from './PopupMSJConfirmacion.jsx'
import Arrow from '../assets/cerrar2.svg'
import '../Principal/Principal.css'
import { Label } from '@mui/icons-material';

function PopupModificarCurso({ onClose }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenConfirmation = () => {
        setIsPopupOpen(true);
    };

    const handleCloseConfirmation = () => {
        const popup = document.querySelector('.popup-confirmation');
        if (popup) {
            popup.classList.remove('popup-show');
            popup.classList.add('popup-hide');
            setTimeout(() => {
                setIsPopupOpen(false);
            }, 300); 
        }
    };

    return (
        <>


            <div className='layout_Select'>

                <header className="header_Select">
                <CardHeader
                    sx={{ color: '#FFFFFF', width: '100%', marginLeft: -5 }}
                    title={
                        <Grid container justifyContent="space-between" alignItems="center">
                            
                            <Grid item sx={{ alignItems: 'start', marginLeft: -7 }}>
                                <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: 0, textAlign: 'center', maxWidth: 'auto', maxHeight: 'auto' }}>
                                    Modificar Curso
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
                            <Grid item>

                            </Grid>
                        </Grid>
                    }
                />
                    
                </header>

                <main className="main_Select">

                    

                <div className='ScrollRegistro'>

                    <CardContent sx={{ color: '#FFFFFF' }}>
                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Nombre del Curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant='outlined' size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Fecha:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', marginTop: 1, borderRadius: '15px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Hora:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Lugar:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Persona que Imparte el Curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Lugares Disponibles:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Correo de Seguimiento:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" placeholder='cursos.ivai@gmail.com' disabled={true} size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Estatus Curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                        }
                                    }}
                                    defaultValue=""
                                >
                                    <MenuItem value="Aula 1">Aula 1</MenuItem>
                                    <MenuItem value="Aula 2">Aula 2</MenuItem>
                                    <MenuItem value="Sala de conferencias">Sala de conferencias</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Tipo Curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                        }
                                    }}
                                    defaultValue=""
                                >
                                    <MenuItem value="Aula 1">Aula 1</MenuItem>
                                    <MenuItem value="Aula 2">Aula 2</MenuItem>
                                    <MenuItem value="Sala de conferencias">Sala de conferencias</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                        }
                                    }}
                                    defaultValue=""
                                >
                                    <MenuItem value="Aula 1">Aula 1</MenuItem>
                                    <MenuItem value="Aula 2">Aula 2</MenuItem>
                                    <MenuItem value="Sala de conferencias">Sala de conferencias</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Liga Teams:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Valor Curricular en Horas:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
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

                <footer className="footer_Select">
                    
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button onClick={handleOpenConfirmation} variant="contained" sx={{ width: '10vw' ,backgroundColor: '#E7B756', color: "#1E1E1E"}}>Guardar</Button>
                    </CardActions>

                </footer>

            </div>                

            {isPopupOpen && (
                <div className="popup-overlay-confirmation">
                    <div className={`popup-confirmation ${isPopupOpen ? 'popup-show' : 'popup-hide'}`}>
                        <PopupMSJConfirmacion onClose={handleCloseConfirmation} />
                    </div>
                </div>
            )}

        </>
    )
}

export default PopupModificarCurso;