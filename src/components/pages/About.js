import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const About = ({ company }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.subTitle} variant="h4">
        Sobre este App
      </Typography>
      <Typography className={classes.text} variant="body1">
        <strong>Phone List</strong> É Uma Aplicação alternativa ao google
        Contacts. O gerenciador de contatos Phone List permite que os usuários
        mantenham uma lista de contatos na web de forma segura e usando tudo de
        mais moderno em tecnologia de desenvolvimento de aplicações.
      </Typography>
      <Typography className={classes.text} variant="body1">
        É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma
        cópia deste software e dos arquivos de documentação associados (o
        "Software"), para lidar com o Software sem restrições, incluindo, sem
        limitação, os direitos de uso, cópia, modificação e fusão , publicar,
        distribuir, sublicenciar e / ou vender cópias do Software e permitir que
        as pessoas a quem o Software é fornecido o façam, sujeitas às seguintes
        condições:
      </Typography>
      <Typography className={classes.text} variant="body1">
        O aviso de copyright acima e este aviso de permissão devem ser incluídos
        em todas as cópias ou partes substanciais do Software.
      </Typography>
      <Typography className={classes.text} variant="body1">
        O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM NENHUM TIPO
        DE GARANTIA, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS
        GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO
        VIOLAÇÃO. EM NENHUMA CIRCUNSTÂNCIA, OS AUTORES OU PROPRIETÁRIOS DE
        DIREITOS DE AUTOR PODERÃO SER RESPONSABILIZADOS POR QUAISQUER
        RECLAMAÇÕES, DANOS OU OUTRAS RESPONSABILIDADES, QUER EM ACÇÃO DE
        CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTES DE, OU EM CONEXÃO COM O
        SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO PROGRAMAS.
      </Typography>
      <Typography className={classes.text} variant="body1">
        MIT license
      </Typography>
      <Typography className={classes.text} variant="body1">
        Versão: 1.0.0
      </Typography>
      <Typography className={classes.text} variant="body1">
        Copyright {dayjs().year()} &copy;
        <a
          href="http://thiagotec.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
      </Typography>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  subTitle: {
    marginTop: "25px"
  },
  text: {
    margin: "20px auto"
  }
});

About.propTypes = {
  company: PropTypes.string
};

About.defaultProps = {
  company: "Thiagotec"
};

export default About;
