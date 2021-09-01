import React, { Component } from 'react';

import '../styles/Main.css';

import '../images/image-block-1.jpg';
import '../images/children1.jpg';
import '../images/children2.jpg';
import '../images/children3.jpg';
import '../images/children4.jpg';
import '../images/children5.jpg';
import '../images/children6.jpg';

class Main extends Component {
    render() {
        return(
            <main className='container'>
                <div className='block-one'>
                    <div className='image-block'>
                        <img src='./images/image-block-1.jpg'></img>
                    </div>
                    <div className='info-block'>
                        <h1 className='title-text'>О нас</h1>
                        <p className='text-info'>
                        Это учебный проект, созданный с целью получения боевого опыта в разработке 
                    настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, 
                    в котором можно не только арендовать автомобили, но и сдавать их в аренду.
                        </p>
                    </div>
                </div>
                <div className='block-two'>
                    <h1 className='contact'>Контакты</h1>
                    <div className='contact-info'>
                        <div className='mail-info'>
                            <h4 className='block-two-mail'>Электронная почта</h4>
                            <p className='block-two-address'>drive@skillfactory.com</p>
                        </div>
                        <div className='phone-info'>
                            <h4 className='block-two-phone'>Телефон</h4>
                            <p className='block-two-int'>+7 912 123-45-67</p>
                        </div>
                    </div>
                </div>
                <div className='block3'>
                    <h1 className='command'>Команда</h1>
                    <div className='children-command'>
                        <div className='children-block-one'>
                            <div className='children'>
                                <img className='children-img' src='./images/children1.jpg' alt='CEO: Ivanov'></img>
                                <h3 className='block-name'>Иван Иванов</h3>
                                <p className='post'>СЕО</p>
                            </div>
                            <div className='children'>
                                <img className='children-img' src='./images/children2.jpg' alt='Front: Smirnov'></img>
                                <h3 className='block-name'>Алексей Смирнов</h3>
                                <p className='post'>Frontend-разработчик</p>
                            </div>
                            <div className='children'>
                                <img className='children-img' src='./images/children3.jpg' alt='Backend: Yarcev'></img>
                                <h3 className='block-name'>Денис Ярцев</h3>
                                <p className='post'>Backend-разработчик</p>
                            </div>
                            <div className='children'>
                                <img className='children-img' src='./images/children4.jpg' alt='Designer: Morozov'></img>
                                <h3 className='block-name'>Николай Морозов</h3>
                                <p className='post'>Дизайнер</p>
                            </div>
                        </div>
                        <div className='children-block-reserved'>
                        <div className='children'>
                                <img className='children-img' src='./images/children1.jpg' alt='CEO: Ivanov'></img>
                                <h3 className='block-name'>Иван Иванов</h3>
                                <p className='post'>СЕО</p>
                            </div>
                                <div className='children'>
                                <img className='children-img' src='./images/children2.jpg' alt='Front: Smirnov'></img>
                                <h3 className='block-name'>Алексей Смирнов</h3>
                                <p className='post'>Frontend-разработчик</p>
                            </div>
                        </div>
                        <div className='children-block-reserved'>
                            <div className='children'>
                                <img className='children-img' src='./images/children3.jpg' alt='Backend: Yarcev'></img>
                                <h3 className='block-name'>Денис Ярцев</h3>
                                <p className='post'>Backend-разработчик</p>
                            </div>
                            <div className='children'>
                                <img className='children-img' src='./images/children4.jpg' alt='Designer: Morozov'></img>
                                <h3 className='block-name'>Николай Морозов</h3>
                                <p className='post'>Дизайнер</p>
                            </div>
                        </div>
                        <div className='children-block-reserved'>
                            <div className='children'>
                                <img className='children-img' src='./images/children5.jpg' alt='Copy: Deveeva'></img>
                                <h3 className='block-name'>Ирина Деева</h3>
                                <p className='post'>Копирайтер</p>
                            </div>
                            <div className='children'>
                                <img className='children-img' src='./images/children6.jpg' alt='SMM: Strelkova'></img>
                                <h3 className='block-name'>Мария Стрелкова</h3>
                                <p className='post'>SMM</p>
                            </div>
                        </div>
                        <div className='children-block-two'>
                            <div className='child'>
                                <img className='children-img' src='./images/children5.jpg' alt='Copy: Deveeva'></img>
                                <h3 className='block-name'>Ирина Деева</h3>
                                <p className='post'>Копирайтер</p>
                            </div>
                            <div className='child'>
                                <img className='children-img' src='./images/children6.jpg' alt='SMM: Strelkova'></img>
                                <h3 className='block-name'>Мария Стрелкова</h3>
                                <p className='post'>SMM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;