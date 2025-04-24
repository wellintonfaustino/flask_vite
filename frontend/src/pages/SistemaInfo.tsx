import { useEffect, useState } from 'react';

function SistemaInfo() {
  interface SistemaInfoType {
    sistema_operacional: string;
    arquitetura: string;
    processador: string;
    nucleos_fisicos: number;
    nucleos_logicos: number;
    ram_total_gb: number;
    disco_total_gb: number;
  }

  const [info, setInfo] = useState<SistemaInfoType | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/sistema')
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  if (!info) return <p>Carregando informações...</p>;

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-2'>Informações do Sistema</h2>
      <ul className='text-left'>
        <li>
          <b>SO:</b> {info.sistema_operacional}
        </li>
        <li>
          <b>Arquitetura:</b> {info.arquitetura}
        </li>
        <li>
          <b>Processador:</b> {info.processador}
        </li>
        <li>
          <b>Núcleos Físicos:</b> {info.nucleos_fisicos}
        </li>
        <li>
          <b>Núcleos Lógicos:</b> {info.nucleos_logicos}
        </li>
        <li>
          <b>RAM:</b> {info.ram_total_gb} GB
        </li>
        <li>
          <b>Disco:</b> {info.disco_total_gb} GB
        </li>
      </ul>
    </div>
  );
}

export default SistemaInfo;
