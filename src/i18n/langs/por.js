const es = {
  // element组件翻译
  el: {
    colorpicker: {
      confirm: 'ok',
      clear: 'esvaziar'
    },
    datepicker: {
      now: 'Neste momento',
      today: 'hoje',
      cancel: 'cancelar',
      clear: 'esvaziado',
      confirm: 'ok',
      selectDate: 'selecionar data',
      selectTime: 'tempo de seleção',
      startDate: 'data de iniciação',
      startTime: 'hora de iniciação',
      endDate: 'data de terminação',
      endTime: 'tempo de terminação',
      prevYear: 'ano anterior',
      nextYear: 'um ano depois ',
      prevMonth: 'mês passão',
      nextMonth: 'no próximo mes',
      year: 'ano',
      month1: 'janeiro',
      month2: 'fevereiro',
      month3: 'março',
      month4: 'abril',
      month5: 'maio',
      month6: 'junho',
      month7: 'julho',
      month8: 'agosto',
      month9: 'setembro',
      month10: 'outubro',
      month11: 'novembro',
      month12: 'dezembro',
      // week: '周次',
      weeks: {
        sun: 'dia',
        mon: 'um',
        tue: 'dois',
        wed: 'três',
        thu: 'quatro',
        fri: 'cinco',
        sat: 'seis'
      },
      months: {
        jan: 'janeiro',
        feb: 'fevereiro',
        mar: 'março',
        apr: 'abril',
        may: 'maio',
        jun: 'junho',
        jul: 'julho',
        aug: 'agosto',
        sep: 'setembro',
        oct: 'outubro',
        nov: 'novembro',
        dec: 'dezembro'
      }
    },
    select: {
      loading: 'carregando',
      noMatch: 'sem dados correspondentes',
      noData: 'sem dados disponíveis',
      placeholder: 'por favor selecione'
    },
    cascader: {
      noMatch: 'sem dados correspondentes',
      loading: 'carregando',
      placeholder: 'por favor, selecione',
      noData: 'não há dados ainda'
    },
    pagination: {
      goto: 'ir para',
      pagesize: 'barra/page',
      total: '{total} barras',
      pageClassifier: 'página'
    },
    messagebox: {
      title: 'dicas ',
      confirm: 'ok',
      cancel: 'cancelar',
      error: 'os dados inseridos não são legítimos!'
    },
    upload: {
      deleteTip: "pressione delete'para delete",
      delete: 'delete',
      preview: 'ver imagens',
      continue: 'continuar carregando'
    },
    table: {
      emptyText: 'não há dados ainda',
      confirmFilter: 'filtrar',
      resetFilter: 'resete',
      clearFilter: 'todo',
      sumText: 'total'
    },
    tree: {
      emptyText: 'não há dados ainda'
    },
    transfer: {
      noMatch: 'sem dados correspondentes',
      noData: 'sem dados disponíveis',
      titles: ['lista 1', 'lista 2'],
      filterPlaceholder: 'por favor, digite o conteúdo da pesquisa',
      noCheckedFormat: '{total} itens',
      hasCheckedFormat: '{checked}/{total} item selecionado'
    },
    image: {
      error: 'falha ao carregar'
    },
    pageHeader: {
      title: 'retorno'
    }
  },
  home: {
    logout: 'Sair do login'
  },
  notice: {
    search: 'inquéritos',
    addNotice: 'novos anúncios adicionados',
    table: {
      index: 'número série',
      title: 'título do anúncio',
      content: 'conteúdo do anúncio',
      areas: 'address',
      stime: 'data de início',
      etime: 'data de final',
      btnHandle: 'funcionamento',
      btnUpdate: 'modificado'
    },
    dialog: {
      title: 'anúncio adicionado',
      form: {
        title: 'título do anúncio',
        content: 'conteúdo do anúncio',
        areas: 'address',
        times: 'tempo do anúncio',
        placeholder: 'por favor, digite',
        placeholderS: 'por favor, selecione',
        rangeSeparator: 'até',
        startPlaceholder: 'data de inicio',
        endPlaceholder: 'data de final'
      },
      rules: {
        title: 'por favor, insira o título do anúncio',
        content: 'por favor, insira o conteúdo do anúncio',
        times: 'por favor, selecione uma hora'
      },
      btnConfirme: 'confirme',
      btnCancel: 'cancelar'
    }

  },
  role: {
    table: {
      index: 'número série',
      name: 'id',
      title: 'posta',
      created_at: 'data de criação',
      updated_at: 'data de modificação',
      btnHandle: 'funcionamento',
      btnUpdate: 'modificado'
    },
    dialog: {
      title: 'modificar informações de postagem',
      form: {
        title: 'posta',
        permissions: 'permissões'
      }
    },
    btnConfirme: 'confirme',
    btnCancel: 'cancelar'
  },
  admin: {
    searchForm: {
      name: 'nome',
      email: 'Nome da conta'
    },
    searchBtn: 'inquéritos',
    addAccountBtn: 'Novos usuários adicionados',
    table: {
      index: 'número série',
      name: 'nome',
      email: 'nome da conta',
      created_at: 'data de criação',
      updated_at: 'data de modificação',
      btnHandle: 'funcionamento',
      btnUpdate: 'modificado'
    },
    dialog: {
      title: 'modifique seus direitos',
      form: {
        name: 'nome',
        role_value: 'Lista de permissões'
      }
    },
    addDialog: {
      title: 'adicionar uma conta',
      form: {
        name: 'nome',
        email: 'nome da conta',
        password: 'senha（Senha por padrão: 666666）'
      }
    },
    rules: {
      role_value: 'Por favor, selecione permissões',
      name: 'Por favor insira um nome',
      email: 'Por favor insira o nome da conta',
      password: 'Por favor insira o senha'
    },
    dialogConfirmeBtn: 'confirme',
    dialogCancelBtn: 'cancelar'
  }
}
export default es

