import styled from "styled-components";

export const Modal = styled.div`
    width: 250px;
    height: 245px;
    background-color: #EFAAAA;
    border-radius: 20px;
    border: 4px solid #C77D7D;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .TitleExit{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;    
    }

    .TopCon{
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .word{
        font-size: 27px;
        font-weight: bold;
        }
        
    .exit{
        font-size: 20px;
        margin-left: 20px;
        cursor: pointer;
        }


    .Btns{
        width: 100%;
        height: 140px;
        display: flex;
        
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .Btn{
        width: 170px;
        height: 55px;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;
        
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;    
    }
`