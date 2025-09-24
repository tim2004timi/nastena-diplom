import { useNavigate } from 'react-router-dom'
import styles from './StudentProfile.module.css'

const StudentProfile = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className={styles.screen}>
      <div className={styles.groupWrapper}>
        <div className={styles.div}>
          <div className={styles.textWrapper}>Логин</div>
          <div className={styles.textWrapper2}>student</div>
          <div className={styles.textWrapper3}>Пол</div>
          <div className={styles.textWrapper4}>Женский</div>
          <div className={styles.textWrapper5}>Личный номер</div>
          <div className={styles.textWrapper6}>Почта</div>
          <div className={styles.textWrapper7}>Возраст</div>
          <div className={styles.textWrapper8}>Вид возмещ. затрат</div>
          <div className={styles.textWrapper9}>300ЛУ</div>
          <div className={styles.textWrapper10}>tupikovanasty@iclou...</div>
          <div className={styles.textWrapper11}>19 лет (21.05.2006)</div>
          <div className={styles.textWrapper12}>Бюджет</div>
          <div className={styles.group2}>
            <div className={styles.textWrapper13}>Тупикова Анастасия <br />Андреевна</div>
            <div className={styles.rectangle}></div>
            <div className={styles.textWrapper14}>П-22</div>
            <div className={styles.textWrapper15}>Курс 4</div>
            <div className={styles.ellipse}></div>
            <img className={styles.component} src="https://c.animaapp.com/KY8pXgBJ/img/component.svg" />
          </div>
        </div>
      </div>
      
      <div className={styles.group3}>
        <div className={styles.rectangle2}></div>
        <div className={styles.textWrapper16}>Тупикова А.</div>
        <div className={styles.group4} onClick={handleLogout}>
          <div className={styles.textWrapper17}>Выйти</div>
          <img className={styles.img} src="https://c.animaapp.com/KY8pXgBJ/img/group@2x.png" />
        </div>
      </div>
      
      <div className={styles.group5}>
        <div className={styles.rectangle3}></div>
        <div className={styles.textWrapper18}>20.09</div>
      </div>
      
      <img className={styles.group6} src="https://c.animaapp.com/KY8pXgBJ/img/group-11@2x.png" />
      <img className={styles.group7} src="https://c.animaapp.com/KY8pXgBJ/img/group-12@2x.png" />
      
      <div className={styles.group8}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangle4}></div>
        </div>
        <div className={styles.group9}>
          <div className={styles.group10}>
            <p className={styles.p}>МДК 4.1. В и ПКС</p>
            <div className={styles.textWrapper19}>1 пара</div>
            <img className={styles.fluentOutOf} src="https://c.animaapp.com/KY8pXgBJ/img/fluent-mdl2-out-of-office-2.svg" />
            <div className={styles.textWrapper20}>Подоплелова Е.С.</div>
            <div className={styles.textWrapper21}>А220</div>
          </div>
          <div className={styles.textWrapper22}>Внедрение и поддержка<br />компьютерных систем</div>
        </div>
      </div>
      
      <div className={styles.group11}>
        <div className={styles.rectangle5}></div>
        <div className={styles.rectangle6}></div>
        <div className={styles.group12}>
          <p className={styles.p}>МДК 4.1. В и ПКС</p>
          <div className={styles.textWrapper19}>2 пара</div>
          <img className={styles.fluentMdlOutOf} src="https://c.animaapp.com/KY8pXgBJ/img/fluent-mdl2-out-of-office-2.svg" />
          <div className={styles.textWrapper23}>Подоплелова Е.С.</div>
          <div className={styles.textWrapper24}>А220</div>
        </div>
        <div className={styles.textWrapper25}>Внедрение и поддержка<br />компьютерных систем</div>
      </div>
      
      <div className={styles.group13}>
        <div className={styles.group14}>
          <div className={styles.rectangle5}></div>
          <div className={styles.rectangle6}></div>
          <div className={styles.group15}>
            <div className={styles.textWrapper26}>3 пара</div>
            <img className={styles.fluentOutOf2} src="https://c.animaapp.com/KY8pXgBJ/img/fluent-mdl2-out-of-office-2.svg" />
            <div className={styles.textWrapper27}>Горбанёва В.И.</div>
            <div className={styles.textWrapper28}>А208/113</div>
          </div>
          <div className={styles.textWrapper25}>Иностранный<br />язык</div>
        </div>
        <div className={styles.textWrapper29}>ОГСЭ 4 ИЯ</div>
      </div>
      
      <img className={styles.group16} src="https://c.animaapp.com/KY8pXgBJ/img/group-24@2x.png" />
    </div>
  )
}

export default StudentProfile
