Doc = {}
Doc.lang = document.getEletemtByID('lang')
const url = new URL(window.location)
const sp = url.searchParams
if (sp.get('lang')) {
  Doc.lang.value = sp.get('lang')
} else {
  sp.set('lang', Doc.lang.value)
}
