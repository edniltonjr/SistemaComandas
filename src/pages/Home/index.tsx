import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';


import Header from '../../components/Header';


import {
  Container,
  ContainerFormTask,
  FormTask
} from './styles';




const Home: React.FC = () => {
  const [jornadasManual, setJornadasManual] = useState<any[]>([]);


 
    const inserirPonto = useCallback(

      (data) => {
        api
          .post(`/pedido/novo`, {
            numero: data.numero
          })
          .then((response) => {
            setJornadasManual([...jornadasManual, response.data]);
            // toast.success("Registro Inserido com Sucesso");
            alert(response.data.message)
          }).catch(err => {
            console.log(err)
            alert(err.response.data.error)
          })
      },
      [jornadasManual]
    );

    const { register, handleSubmit, reset, } = useForm<any>();




  return (
    <Container>
      <Header />

      <ContainerFormTask>
        <FormTask onSubmit={handleSubmit(inserirPonto)}>

            <input
              type="text"
              placeholder="Digite"
              name="numero"
              ref={register}
            />
  

        <button>Gravar Pedido</button>        
        
        </FormTask>


      </ContainerFormTask>

    </Container>
  );
};

export default Home;