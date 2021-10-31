import { Button, Divider, Grid, MenuItem, Typography } from '@material-ui/core'
import { Checkbox, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateEmployee = () => {

    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const handleChangeDepartment = (event) => {
        setDepartment(event.target.value);
    };

    return (
        <div className="create-container">
            <div className="create-header">
                Thong tin tai khoan
            </div>
            <Divider />
            <form action="" className="create-form">
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Ho va ten:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <TextField required placeholder="Nhap ho ten" />
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> E-mail:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <TextField required placeholder="Nhap Email" />
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Username:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <TextField required placeholder="Nhap Username" />
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Password:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <TextField type="password" required placeholder="Nhap mat khau" />
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Phone:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <TextField required placeholder="Nhap so dien thoai" />
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Phong ban:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Select
                                style={{ width: 360 }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={department}
                                onChange={handleChangeDepartment}
                            >
                                <MenuItem value="Kinh doanh">Kinh doanh</MenuItem>
                                <MenuItem value="Phat trien">Phat trien</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Chuc vu:
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Select
                                style={{ width: 360 }}
                                value={role}
                                onChange={handleChangeRole}
                            >
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="Nhan vien">Nhan vien</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </div>
                <div className="form-input">
                    <Grid container spacing={2} style={{ alignItems: 'flex-start' }}>
                        <Grid xs={1}>
                            <Typography variant="span" component="span">
                                <span className="create-required">*</span> Phan quyen:
                            </Typography>
                        </Grid>
                        <Grid xs={1}>
                            <div className="checkbox">
                                <Checkbox />
                                <Checkbox />
                                <Checkbox />
                                <Checkbox />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Button className="btn" type="submit" variant="contained" disableElevation>Submit</Button>
            </form>
        </div>
    )
}

export default CreateEmployee
