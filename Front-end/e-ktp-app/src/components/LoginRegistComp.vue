<template>
    <div class="wrapper">
        <div class="container">
            <input type="checkbox" id="flip" />
            <div class="cover">
                <div class="front">
                    <div class="text d-flex">
                        <img class="ilustrasi" src="../assets/ilustrasi-3.svg" alt=""
                            style="width: 270px; height: auto; margin-bottom: 50px" />
                    </div>
                </div>
                <div class="back">
                    <div class="text">
                        <img class="backImg" src="../assets/ilustrasi-1.svg" alt=""
                            style="width: 340px; height: auto; margin-bottom: 100px" />
                    </div>
                </div>
            </div>
            <div class="forms">
                <div class="form-content">
                    <div class="login-form">
                        <div class="title text-center">Login</div>
                        <form action="#" @submit.prevent="login">
                            <div class="input-boxes">
                                <div class="input-box">
                                    <input v-model="userLogin.email" type="email" name="email" placeholder="Email"
                                        required />
                                </div>
                                <div class="input-box">
                                    <i class="fas fa-lock"></i>
                                    <input v-model="userLogin.password" type="password" name="password"
                                        placeholder="Password" required />
                                </div>
                                <p v-if="loginValid" class="text-center text-warning">
                                    Username atau Password Salah
                                </p>
                                <p v-if="registerBerhasil" class="text-center text-success">
                                    Berhasil mendaftar! Silahkan Login
                                </p>
                                <button class="btn btn-success" type="submit">Masuk</button>
                                <div class="text sign-up-text">
                                    Belum Punya Akun? <label for="flip">Daftar Sekarang</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="signup-form">
                        <div class="title">Signup</div>
                        <form action="#" @submit.prevent="register">
                            <div class="input-boxes">
                                <div class="input-box">
                                    <i class="fas fa-user"></i>
                                    <input v-model="userRegister.nama" type="text" name="name"
                                        placeholder="Nama Lengkap" required />
                                </div>
                                <div class="input-box">
                                    <i class="fas fa-envelope"></i>
                                    <input v-model="userRegister.email" type="email" placeholder="Email" required />
                                </div>
                                <div class="input-box">
                                    <i class="fas fa-lock"></i>
                                    <input v-model="userRegister.password" type="password" placeholder="Password"
                                        required />
                                </div>
                                <div class="input-box">
                                    <i class="fas fa-lock"></i>
                                    <input v-model="password2" type="password" placeholder="Ulangi Password" required />
                                </div>
                                <p v-if="registerValid" class="text-center text-warning">
                                    Password Tidak Sama
                                </p>
                                <p v-if="emailValid" class="text-center text-warning">
                                    Email Sudah digunakan
                                </p>
                                <p v-if="registerBerhasil" class="text-center text-success">
                                    Berhasil mendaftar! Silahkan Login
                                </p>
                                <button class="btn btn-success" type="submit">Daftar</button>
                                <div class="text sign-up-text">
                                    Sudah Punya Akun? <label for="flip">Masuk </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import eKtpKKService from "@/services/userServices";
export default {
    data() {
        return {
            userLogin: {
                email: "",
                password: "",
            },
            userRegister: {
                nama: "",
                email: "",
                password: "",
            },
            loginValid: false,
            password2: "",
            registerValid: false,
            emailValid: false,
            registerBerhasil: false,
            checkbox: "",
        };
    },
    methods: {
        login() {
            console.log(this.userLogin);
            eKtpKKService
                .login(this.userLogin)
                .then((response) => {
                    if (response.status === 200) {
                        this.$router.push("/home");
                    }
                })
                .catch((e) => {
                    if (e.response.status === 500) {
                        this.loginValid = true;
                    }
                });
        },
        register() {
            this.registerValid = false;
            this.emailValid = false;
            let data = this.userRegister;
            let password2 = this.password2;
            if (data.password == password2) {
                eKtpKKService
                    .register(data)
                    .then((response) => {
                        console.log(response.data);
                        this.userRegister = {};
                        this.password2 = "";
                        this.registerBerhasil = true;
                        this.checkbox = true;
                    })
                    .catch((e) => {
                        // console.log(e);
                        if (e.response.data.status === 500) {
                            this.emailValid = true;
                        }
                    });
            } else {
                this.registerValid = true;
            }
        },
    },
};
</script>

<style scoped>
svg {
    margin-left: 20px;
}

/* Google Font Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.btn-success {
    background-color: #00bc67;
    border: none;
    height: 45px;
    width: 100%;
}

.wrapper {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to right top,
            #845ec2,
            #7a5bc6,
            #6d59ca,
            #5e57ce,
            #4b56d2);
}

.container {
    position: relative;
    max-width: 850px;
    width: 100%;
    background: #fff;
    padding: 40px 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    perspective: 2700px;
    margin: 70px auto;
}

.container .cover {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 50%;
    z-index: 98;
    transition: all 1s ease;
    transform-origin: left;
    transform-style: preserve-3d;
}

.container #flip:checked~.cover {
    transform: rotateY(-180deg);
}

.container .cover .front,
.container .cover .back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.cover .back {
    transform: rotateY(180deg);
    backface-visibility: hidden;
}

.container .cover::before,
.container .cover::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #ff9671;
    opacity: 1;
    z-index: 12;
}

.container .cover::after {
    opacity: 0.3;
    transform: rotateY(180deg);
    backface-visibility: hidden;
}

.container .cover img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 10;
}

.container .cover .text {
    position: absolute;
    z-index: 130;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cover .text .text-2 {
    font-size: 15px;
    font-weight: 500;
}

.container .forms {
    height: 100%;
    width: 100%;
    background: #fff;
}

.container .form-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-content .login-form,
.form-content .signup-form {
    width: calc(100% / 2 - 25px);
}

.forms .form-content .title {
    position: relative;
    font-size: 24px;
    font-weight: 500;
    color: rgb(50, 50, 50);
}

/* .forms .form-content .title:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 50px;
    background: #4B56D2;
    margin-left: 150px;
} */

.forms .signup-form .title:before {
    width: 20px;
}

.forms .form-content .input-boxes {
    margin-top: 30px;
}

.forms .form-content .input-box {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: 10px 0;
    position: relative;
}

.form-content .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.form-content .input-box input:focus,
.form-content .input-box input:valid {
    border-color: #00df7a;
}

.form-content .input-box i {
    position: absolute;
    color: #7d2ae8;
    font-size: 17px;
}

.forms .form-content .text {
    font-size: 14px;
    font-weight: 500;
    color: #333;
}

.forms .form-content .text a {
    text-decoration: none;
}

.forms .form-content .text a:hover {
    text-decoration: underline;
}

.forms .form-content .button {
    color: #fff;
    margin-top: 40px;
}

.forms .form-content .button input {
    color: #fff;
    background: #00df7a;
    border-radius: 6px;
    padding: 0;
    cursor: pointer;
    transition: all 0.4s ease;
}

.forms .form-content .button input:hover {
    background: #00bc67;
}

.forms .form-content label {
    color: #5b13b9;
    cursor: pointer;
}

.forms .form-content label:hover {
    text-decoration: underline;
}

.forms .form-content .login-text,
.forms .form-content .sign-up-text {
    text-align: center;
    margin-top: 25px;
}

.container #flip {
    display: none;
}

@media (max-width: 730px) {
    .container .cover {
        display: none;
    }

    .form-content .login-form,
    .form-content .signup-form {
        width: 100%;
    }

    .form-content .signup-form {
        display: none;
    }

    .container #flip:checked~.forms .signup-form {
        display: block;
    }

    .container #flip:checked~.forms .login-form {
        display: none;
    }

    img .ilustrasi {
        border: 1px solid white;
    }
}
</style>
