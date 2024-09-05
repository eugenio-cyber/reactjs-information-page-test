import "./style.css";

export default function Warning() {
  return (
    <section className='warning'>
      <h3 className='warning__title'>Endormarketing</h3>
      <p className='warning__paragraph'>
        Endomarketing está relacionado às ações de treinamento ou qualificação
        dos colaboradores da empresa visando um melhor serviço para o cliente.
        Marketing interno, devido ao nome, é usualmente confundido com
        Endomarketing mesmo sendo conceitos diferentes.
      </p>
      <a href='/' className='warning__button'>
        DISPENSAR
      </a>
    </section>
  );
}
