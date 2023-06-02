import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <section class="our-log bgc-fa">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6 offset-lg-3">
                            <div class="login_form inner_page">

                                <span id="maincontent"></span><div class="my-1 my-sm-5"></div>

            


                                <form action="http://demo.createdbycocoon.com/moodle/edumy/1/login/index.php" method="post" id="login">

                                    <div class="heading">
                                        <h3 class="text-center">Login to your account</h3>
                                        <p class="text-center">Don't have an account? <Link class="text-thm" to="/choice">Sign Up!</Link></p>
                                    </div>


                                    <input id="anchor" type="hidden" name="anchor" value="" />
                                    <script>document.getElementById('anchor').value = location.hash;</script>
                                    <input type="hidden" name="logintoken" value="imG4lD1Ss876rLBbq5nXNR2bgbTMM3mh" />
                                    <div class="form-group">
                                        <label for="username" class="sr-only">
                                            Username
                                        </label>
                                        <input type="text" name="username" id="username" class="form-control" value="" placeholder="Username" autocomplete="username" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" name="password" id="password" value="" class="form-control" placeholder="Password" autocomplete="current-password" />
                                    </div>
                                    <div class="form-group custom-control custom-checkbox">
                                        <Link class="tdu btn-fpswd float-right" to="/forget">Forgot Password?</Link>
                                    </div>

                                    <button type="submit" class="btn btn-log btn-block btn-thm2" id="loginbtn">Log in</button>
                                </form>
                                <div class="ccn_first-time">
                                    <div class="">
                                        <div class="">
                                            <div class="">
                                                <div class="">
                                                    <h3>Is this your first time here?</h3>
                                                </div>
                                                <div>
                                                    For full access to this site, you first need to create an account.
                                                    <form class="mt-3" action="http://demo.createdbycocoon.com/moodle/edumy/1/login/signup.php" method="get" id="signup">
                                                      <Link to="/choice"><button type="submit" class="btn btn-secondary">Create new account</button></Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
