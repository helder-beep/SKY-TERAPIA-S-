import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-black text-[#2B1B4E] mb-2 uppercase tracking-tight">
              Termos e Condições
            </h1>
            <p className="text-slate-600 mb-8">Última atualização: 13 de Março de 2026</p>

            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed space-y-6">
              
              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">1. Identificação</h2>
                <p>
                  <strong>SKY TERAPIA'S</strong><br />
                  Santarém, Portugal (marcação prévia)<br />
                  NIF: [Inserir NIF]<br />
                  Telefone: +351 923 366 826<br />
                  Email: terapiassky1@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">2. Âmbito</h2>
                <p>
                  Estes Termos e Condições regulam:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Utilização do website</li>
                  <li>Prestação de sessões de terapias holísticas e complementares</li>
                  <li>Marcações de consulta e cursos/workshops</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">3. Aceitação dos Termos</h2>
                <p>
                  Ao aceder e utilizar o website ou solicitar sessões, o utilizador aceita integralmente estes Termos e Condições. Se não concorda, não deve utilizar o website nem marcar sessões.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">4. Serviços Oferecidos</h2>
                <p>A SKY TERAPIA'S oferece os seguintes serviços:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tarot cigano e tarot intuitivo</li>
                  <li>Terapia de vidas passadas e psicoterapia holística</li>
                  <li>Reiki, cromoterapia e aromaterapia</li>
                  <li>Defumações, mesa radiónica e EFT</li>
                  <li>Cursos e workshops de terapias holísticas</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  Estas terapias têm caráter complementar e não substituem acompanhamento médico, psicológico ou psiquiátrico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">5. Orçamentos</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Validade:</strong> Orçamentos válidos por 30 dias a contar da data de emissão</li>
                  <li><strong>Condições:</strong> Pressupostos mantêm-se inalterados se o cliente não solicitar alterações</li>
                  <li><strong>Obrigatoriedade:</strong> Orçamento não representa compromisso de contratação</li>
                  <li><strong>Confirmação:</strong> A aceitação deve ser confirmada por escrito (email ou assinatura)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">6. Contrato de Serviço</h2>
                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">6.1 Formação</h3>
                <p>
                  O contrato é formado quando: (i) cliente aceita o orçamento; (ii) cliente efetua pagamento de sinal, se requerido; (iii) SKY TERAPIA'S confirma execução do serviço.
                </p>
                
                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">6.2 Pagamento</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Forma:</strong> Transferência bancária, débito direto ou dinheiro</li>
                  <li><strong>Sinal:</strong> Geralmente 50% no início dos trabalhos</li>
                  <li><strong>Saldo:</strong> 50% na conclusão</li>
                  <li><strong>Atraso:</strong> Após 15 dias de atraso, SKY TERAPIA'S pode suspender serviços</li>
                </ul>

                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">6.3 Duração e Pontualidade</h3>
                <p>
                  As sessões têm a duração combinada previamente. Atrasos do cliente podem reduzir o tempo efetivo da sessão, sem alteração do valor acordado.
                </p>

                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">6.4 Natureza do Serviço</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Caráter complementar:</strong> As terapias oferecidas são complementares e não substituem acompanhamento médico, psicológico ou psiquiátrico</li>
                  <li><strong>Resultados:</strong> Não é garantido nenhum resultado específico; cada pessoa vive o seu processo de forma diferente</li>
                  <li><strong>Confidencialidade:</strong> O conteúdo das sessões é mantido em sigilo, salvo obrigação legal em contrário</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">7. Responsabilidades do Cliente</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer informação verdadeira relevante para a sessão</li>
                  <li>Comunicar caso esteja a ser acompanhado por um profissional de saúde</li>
                  <li>Efetuar pagamentos nos prazos acordados</li>
                  <li>Respeitar os horários de marcação</li>
                  <li>Não utilizar as sessões como substituto de tratamento médico urgente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">8. Limitação de Responsabilidade</h2>
                <p>
                  <strong>A SKY TERAPIA'S não é responsável por:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Decisões tomadas pelo cliente com base na sessão</li>
                  <li>Omissão de informações relevantes de saúde por parte do cliente</li>
                  <li>Resultados não obtidos, dado o caráter subjetivo e complementar das terapias</li>
                  <li>Lucros cessantes ou danos indiretos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">9. Cancelamento e Direito de Arrependimento</h2>
                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">9.1 Cancelamento pelo Cliente</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Antes da sessão:</strong> Direito de arrependimento dentro de 14 dias (Lei do Consumidor), desde que a sessão ainda não tenha ocorrido</li>
                  <li><strong>Após a sessão:</strong> Não há direito de reembolso do valor já prestado</li>
                </ul>

                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">9.2 Cancelamento pela SKY TERAPIA'S</h3>
                <p>
                  SKY TERAPIA'S pode cancelar ou remarcar uma sessão em caso de imprevisto, propondo uma nova data o mais brevemente possível.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">10. Formação e Qualificações</h2>
                <p>
                  A SKY TERAPIA'S possui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Formação certificada pela DGERT em Terapias Holísticas</li>
                  <li>Mais de 4 anos de experiência na área</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">11. Resolução de Conflitos</h2>
                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">11.1 Tentativa de Resolução Amigável</h3>
                <p>
                  Qualquer litígio será resolvido através de negociação amigável entre as partes no prazo de 30 dias.
                </p>

                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">11.2 Resolução Alternativa de Litígios (RAL)</h3>
                <p>
                  Se não chegar a acordo, o cliente pode recorrer a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Centro de Arbitragem de Lisboa</strong><br />
                    Rua Febo, 2A - 1600-631 Lisboa<br />
                    Tel: +351 213 814 650<br />
                    www.centroarbitragem.pt</li>
                  <li><strong>Livro de Reclamações Electrónico:</strong> www.livroreclamacoes.pt</li>
                </ul>

                <h3 className="text-lg font-bold text-[#2B1B4E] mt-4 mb-2">11.3 Competência Jurisdicional</h3>
                <p>
                  Aplicável a Lei Portuguesa e foro competente: Comarca de Santarém.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">12. Livro de Reclamações</h2>
                <p>
                  O cliente tem direito de consultar e preencher o Livro de Reclamações Eletrónico em:
                </p>
                <p className="font-bold">
                  www.livroreclamacoes.pt
                </p>
                <p className="text-sm">
                  A SKY TERAPIA'S responde a todas as reclamações dentro de 15 dias úteis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">13. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo do website (textos, imagens, designs, logotipos) é propriedade de SKY TERAPIA'S ou dos seus fornecedores. Proibida reprodução sem autorização.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">14. Condições de Uso do Website</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proibido conteúdo ilegal, ofensivo ou discriminatório</li>
                  <li>Proibido spam, publicidade não autorizada ou phishing</li>
                  <li>SKY TERAPIA'S não se responsabiliza por informações de terceiros</li>
                  <li>Website pode estar indisponível sem aviso prévio para manutenção</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">15. Conformidade Legal</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lei n.º 58/2019 (RGPD em Portugal)</li>
                  <li>Lei do Consumidor: Decreto-Lei n.º 24/96</li>
                  <li>Lei n.º 144/2015 (Resolução Alternativa de Litígios)</li>
                  <li>Código do Direito do Consumidor</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">16. Alterações aos Termos</h2>
                <p>
                  SKY TERAPIA'S reserva-se o direito de alterar estes Termos e Condições. Alterações serão publicadas nesta página e entram em vigor imediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#2B1B4E] mt-8 mb-4 uppercase">17. Contacto</h2>
                <p>
                  Para dúvidas ou reclamações, contacte:
                </p>
                <p className="font-bold">
                  Email: terapiassky1@gmail.com<br />
                  Telefone: +351 923 366 826<br />
                  Santarém, Portugal (marcação prévia)
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
