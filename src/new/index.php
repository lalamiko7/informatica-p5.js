<?php
    $title = 'Ashamedweaver6 & Madruffs8';
    $active = 'home';

    include('./components/head.php');
    include('./components/navigation.php');
?>


        <div class="wrapper">
            <h1>Onze twee meest recente opdrachten:</h1>
        </div>
        
        <footer>
            <div class="footer-wrapper">
                <div class="footer-menu">
                    <h1 class="footer-menu-title">Navigatie</h1>
                    <ul class="footer-menu-links">
                        <li><a href="#" class="active">Home</a></li>
                        <br>
                        <li><a class="fake">Hoofdstuk 1:</a></li>
                        <a href="pages/chapter-1/les-1/1.0.html">Les-1</a>
                        <a href="pages/chapter-1/les-2/2.0.html">Les-2</a>
                        <a href="pages/chapter-1/les-3/3.0.html">Les-3</a>
                        <a href="pages/chapter-1/final-project.html">Eindopdracht</a>
                        <br>
                        <li><a class="fake">Overig:</a></li>
                        <a href="pages/test.html">Testing</a>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="footer-contact">
                    <h1 class="footer-contact-title">Contact</h1>
                    <div class="footer-contact-links">
                        <p>Email</p>
                        <a href="mailto:AshamedWeaver6.madruffs8@gmail.com"><i class="far fa-envelope"></i></a>
                        <p class="subtitle">Sociale media</p>
                        <a href="https://www.facebook.com/profile.php?id=100072901159378"><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/mad_weaver"><i class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/ashamedweaver6madruffs8?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="line"></div>
                <div class="footer-news">
                    <h1 class="footer-news-title">Aanmelden nieuwsbrief</h1>
                    <form>
                        <input type="name" placeholder="Naam" name="name" required>
                        <input type="email" placeholder="Email address" name="mail" required>
                        <div>
                            <input type="checkbox" checked="checked" name="subscribe"> Wekelijkse brief
                            <input type="checkbox" checked="checked" name="subscribe"> Maandelijks brief
                        </div>
                
                        <input type="submit" value="Subscribe">
                      </form>
                </div>
            </div>
            <div class="copyright">&copy; 2021 - ashamedweaver 6madruffs8</div>
        </footer>

        <script src="js/main.js"></script>
    </body>
</html>
