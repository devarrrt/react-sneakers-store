import React from 'react'
//@ts-ignore
import styles from './Drawer.module.scss'


interface IDrawer {
	
}



const Drawer: React.FC<IDrawer> = () => {
	return (
		<div className={styles.drawer}>
					<div className={styles.overlayVisible }>
        <h2 className="d-flex justify-between mb-30">
          Корзина 
					<img  className="cu-p" src="/images/remove.png" alt="Close" />
        </h2>

				<div className="d-flex flex-column flex">
            <div className="items flex">
                <div key={"obj.id"} className="cartItem d-flex align-center mb-20">
                  <div
                
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">obj.title</p>
                    <b> руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
								</div>
								
								
		</div>
		</div>
	)
}



export default Drawer
