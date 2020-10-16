import React from 'react';

export class Profile extends React.Component{

    componentDidMount() {
        console.log("ШАГ2 Компонента отрисована");
    }

    render(){
        console.log("ШАГ1 Компонента отрисовывается");
        return <div className="row">
            <div className="col-2">
                <img width="100%" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
            </div>
            <div className="col-10">
                <h1>Иван Иванов</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum quis voluptate. Amet asperiores facilis natus repudiandae sed unde voluptatem. Ad commodi dolor ea eius, labore porro ratione similique sit?</p>
            </div>
        </div>
    }

}