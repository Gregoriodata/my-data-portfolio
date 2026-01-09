const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com <span className="text-primary">♥</span> e muito café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
