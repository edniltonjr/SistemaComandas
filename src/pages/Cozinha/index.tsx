import React, { useState, useCallback, useEffect } from 'react';
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
  const [pedidos, setPedidos] = useState<any[]>([]);


 
  useEffect(() => {
    api.get(`/pedidos/`).then(res => {
      setPedidos(res.data);
    })


  }, [])


  return (
    <Container>
      <Header />
      <h1>Cozinha</h1>

      <ContainerFormTask>
        <Container>


            
            {pedidos.map(pedido => (
            <ul>
                <li> <h1>{pedido.numped} - {pedido.status}</h1></li>
            </ul>
            ))}

            

        </Container>
      </ContainerFormTask>

    </Container>
  );
};

export default Home;