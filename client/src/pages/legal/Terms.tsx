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
            <h1 className="text-4xl font-black text-[#1B5E20] mb-2 uppercase tracking-tight">
              Termos e Condições
            </h1>
            <p className="text-slate-600 mb-8">Última atualização: 13 de Março de 2026</p>

            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed space-y-6">
              
              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">1. Identificação</h2>
                <p>
                  <strong>[Nome da Empresa], Lda.</strong><br />
                  [Morada completa]<br />
                  NIF: [Inserir NIF]<br />
                  Telefone: [Telefone]<br />
                  Email: geral@example.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">2. Âmbito</h2>
                <p>
                  Estes Termos e Condições regulam:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Utilização do website www.example.com</li>
                  <li>Fornecimento de serviços de instalação de relva artificial e paisagismo</li>
                  <li>Pedidos de orçamento e consultoria</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">3. Aceitação dos Termos</h2>
                <p>
                  Ao aceder e utilizar o website ou solicitar serviços, o utilizador aceita integralmente estes Termos e Condições. Se não concorda, não deve utilizar o website nem solicitar serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">4. Serviços Oferecidos</h2>
                <p>A [Nome da Empresa] oferece os seguintes serviços:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Instalação de relva artificial residencial e desportiva</li>
                  <li>Construção e revestimento de courts de padel</li>
                  <li>Manutenção e suporte técnico</li>
                  <li>Assistência técnica especializada</li>
                  <li>Consultoria em paisagismo e jardins</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">5. Orçamentos</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Validade:</strong> Orçamentos válidos por 30 dias a contar da data de emissão</li>
                  <li><strong>Condições:</strong> Pressupostos mantêm-se inalterados se o cliente não solicitar alterações</li>
                  <li><strong>Obrigatoriedade:</strong> Orçamento não representa compromisso de contratação</li>
                  <li><strong>Confirmação:</strong> A aceitação deve ser confirmada por escrito (email ou assinatura)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">6. Contrato de Serviço</h2>
                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">6.1 Formação</h3>
                <p>
                  O contrato é formado quando: (i) cliente aceita o orçamento; (ii) cliente efetua pagamento de sinal, se requerido; (iii) [Nome da Empresa] confirma execução do serviço.
                </p>
                
                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">6.2 Pagamento</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Forma:</strong> Transferência bancária, débito direto ou dinheiro</li>
                  <li><strong>Sinal:</strong> Geralmente 50% no início dos trabalhos</li>
                  <li><strong>Saldo:</strong> 50% na conclusão</li>
                  <li><strong>Atraso:</strong> Após 15 dias de atraso, [Nome da Empresa] pode suspender serviços</li>
                </ul>

                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">6.3 Prazo de Execução</h3>
                <p>
                  Os prazos indicados são aproximados. Alterações solicitadas pelo cliente, condições climáticas adversas ou fatores externos não previstos podem justificar atrasos.
                </p>

                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">6.4 Garantia</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Duração:</strong> 8 anos sobre a relva artificial (material e mão de obra)</li>
                  <li><strong>Exclusões:</strong> Garantia não cobre danos por negligência, manutenção inadequada, eventos naturais ou vandalismo</li>
                  <li><strong>Manutenção:</strong> Cliente responsável por limpeza e manutenção conforme recomendações</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">7. Responsabilidades do Cliente</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Preparar adequadamente o local de trabalho</li>
                  <li>Informar de infra-estruturas (cabos elétricos, tubagens, etc.)</li>
                  <li>Efetuar pagamentos nos prazos acordados</li>
                  <li>Realizar manutenção periódica recomendada</li>
                  <li>Não danificar maliciosamente os materiais após instalação</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">8. Limitação de Responsabilidade</h2>
                <p>
                  <strong>A [Nome da Empresa] não é responsável por:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Danos causados por negligência ou manutenção inadequada do cliente</li>
                  <li>Danos por evento de força maior (inundações, terremotos, etc.)</li>
                  <li>Utilização inadequada dos materiais ou equipamentos</li>
                  <li>Custos adicionais resultantes de alterações solicitadas pelo cliente</li>
                  <li>Lucros cessantes ou danos indiretos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">9. Cancela Ção e Direito de Arrependimento</h2>
                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">9.1 Cancelamento pelo Cliente</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Antes de iniciar:</strong> Direito de arrependimento dentro de 14 dias (Lei do Consumidor)</li>
                  <li><strong>Após iniciar:</strong> Não há direito de cancelamento; cliente paga trabalho realizado + materiais</li>
                </ul>

                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">9.2 Cancelamento pela [Nome da Empresa]</h3>
                <p>
                  [Nome da Empresa] pode cancelar se: cliente não efetua pagamento; cliente impossibilita execução do serviço; cliente viola condições de segurança.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">10. Segurança e Responsabilidade Civil</h2>
                <p>
                  <strong>Seguros Obrigatórios:</strong> [Nome da Empresa] possui seguros de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responsabilidade Civil Profissional</li>
                  <li>Acidentes de Trabalho</li>
                  <li>Equipamentos e Ferramentas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">11. Resolução de Conflitos</h2>
                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">11.1 Tentativa de Resolução Amigável</h3>
                <p>
                  Qualquer litígio será resolvido através de negociação amigável entre as partes no prazo de 30 dias.
                </p>

                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">11.2 Resolução Alternativa de Litígios (RAL)</h3>
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

                <h3 className="text-lg font-bold text-[#1B5E20] mt-4 mb-2">11.3 Competência Jurisdicional</h3>
                <p>
                  Aplicável a Lei Portuguesa e foro competente: [tribunal competente].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">12. Livro de Reclamações</h2>
                <p>
                  O cliente tem direito de consultar e preencher o Livro de Reclamações Eletrónico em:
                </p>
                <p className="font-bold">
                  www.livroreclamacoes.pt
                </p>
                <p className="text-sm">
                  A [Nome da Empresa] responde a todas as reclamações dentro de 15 dias úteis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">13. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo do website (textos, imagens, designs, logotipos) é propriedade de [Nome da Empresa] ou dos seus fornecedores. Proibida reprodução sem autorização.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">14. Condições de Uso do Website</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proibido conteúdo ilegal, ofensivo ou discriminatório</li>
                  <li>Proibido spam, publicidade não autorizada ou phishing</li>
                  <li>[Nome da Empresa] não se responsabiliza por informações de terceiros</li>
                  <li>Website pode estar indisponível sem aviso prévio para manutenção</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">15. Conformidade Legal</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lei n.º 58/2019 (RGPD em Portugal)</li>
                  <li>Lei do Consumidor: Decreto-Lei n.º 24/96</li>
                  <li>Lei n.º 144/2015 (Resolução Alternativa de Litígios)</li>
                  <li>Código do Direito do Consumidor</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">16. Alterações aos Termos</h2>
                <p>
                  [Nome da Empresa] reserva-se o direito de alterar estes Termos e Condições. Alterações serão publicadas nesta página e entram em vigor imediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">17. Contacto</h2>
                <p>
                  Para dúvidas ou reclamações, contacte:
                </p>
                <p className="font-bold">
                  Email: geral@example.com<br />
                  Telefone: [Telefone]<br />
                  [Morada completa]
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
