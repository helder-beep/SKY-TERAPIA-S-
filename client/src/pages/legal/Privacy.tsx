import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
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
              Política de Privacidade
            </h1>
            <p className="text-slate-600 mb-8">Última atualização: 13 de Março de 2026</p>

            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed space-y-6">
              
              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">1. Responsável pelos Dados</h2>
                <p>
                  <strong>[Nome da Empresa], Lda.</strong><br />
                  [Morada completa]<br />
                  NIF: [Inserir NIF]<br />
                  Telefone: [Telefone]<br />
                  Email: geral@example.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">2. Dados Pessoais Recolhidos</h2>
                <p>A [Nome da Empresa] recolhe os seguintes dados pessoais:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dados de Contacto:</strong> Nome, email, telefone, morada</li>
                  <li><strong>Dados de Localização:</strong> Endereço do imóvel para avaliação de orçamento</li>
                  <li><strong>Dados Comerciais:</strong> Preferências de serviços, histórico de pedidos</li>
                  <li><strong>Dados Técnicos:</strong> Endereço IP, cookies, tipo de navegador</li>
                  <li><strong>Dados Fiscais:</strong> NIF, dados bancários (apenas para faturação autorizada)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">3. Base Legal da Recolha</h2>
                <p>Processamos os seus dados com base em:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Consentimento:</strong> Para contactos comerciais (newsletter, promoções)</li>
                  <li><strong>Contrato:</strong> Para execução de pedidos de orçamento e serviços</li>
                  <li><strong>Obrigação Legal:</strong> Retenção de dados fiscais (10 anos)</li>
                  <li><strong>Interesse Legítimo:</strong> Segurança e análise do website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">4. Destinatários dos Dados</h2>
                <p>Os seus dados podem ser partilhados com:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Equipa Interna:</strong> Comercial, técnica e administrativa</li>
                  <li><strong>Parceiros de Serviço:</strong> Plataformas de orçamento, formulários de contacto</li>
                  <li><strong>Autoridades:</strong> Se obrigados por lei (Finanças, autoridades policiais)</li>
                  <li><strong>Prestadores Técnicos:</strong> Servidores, hosting, análise de dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">5. Período de Conservação</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dados Comerciais:</strong> Durante a relação comercial + 3 anos</li>
                  <li><strong>Dados Fiscais:</strong> 10 anos (obrigação legal)</li>
                  <li><strong>Dados de Contacto (Newsletter):</strong> Até revogação de consentimento</li>
                  <li><strong>Cookies:</strong> Conforme configuração do navegador</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">6. Direitos do Titular</h2>
                <p>Tem o direito de:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Acesso:</strong> Solicitar cópia dos seus dados</li>
                  <li><strong>Retificação:</strong> Corrigir dados inexatos</li>
                  <li><strong>Apagamento:</strong> Solicitar eliminação ("direito ao esquecimento")</li>
                  <li><strong>Portabilidade:</strong> Receber dados num formato estruturado</li>
                  <li><strong>Oposição:</strong> Recusar processamento para fins comerciais</li>
                  <li><strong>Restrição:</strong> Limitar processamento de dados</li>
                </ul>
                <p className="mt-4">
                  Para exercer estes direitos, contacte: <strong>privacidade@example.com</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">7. Segurança de Dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados contra:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encriptação SSL/TLS do website</li>
                  <li>Controlo de acesso restrito</li>
                  <li>Backup regularizados</li>
                  <li>Política de confidencialidade com colaboradores</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">8. Cookies</h2>
                <p>
                  O website utiliza cookies para analytics e funcionalidade. Ao continuar a navegação, está a consentir o uso de cookies. Pode desativar cookies nas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">9. Reclamações</h2>
                <p>
                  Se considera que o processamento dos seus dados viola os seus direitos, pode apresentar reclamação junto da:
                </p>
                <p className="font-bold mt-2">
                  Comissão Nacional de Protecção de Dados (CNPD)<br />
                  Rua de São Bento, 148-3º<br />
                  1200-821 Lisboa<br />
                  Tel: +351 213 928 400<br />
                  www.cnpd.pt
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-[#1B5E20] mt-8 mb-4 uppercase">10. Alterações a Esta Política</h2>
                <p>
                  Reservamos o direito de atualizar esta Política de Privacidade. As alterações serão publicadas nesta página com nova data de atualização.
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
